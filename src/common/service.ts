import client from '../client.ts'

export abstract class Service<T> {
  table: string
  constructor(tableName: string) {
    this.table = tableName
  }

  async findAll() {
    const sql = `select * from ${this.table}`;
    const { rows } = await client.execute(sql);
    return {
      status: 200,
      data: rows,
    };
  }

  async findById(id: number) {
    const sql = `select * from ${this.table} where id = ?`;
    const { rows } = await client.execute(sql, [id]);
    const data = rows && rows.length ? rows[0] : null;
    return {
      status: 200,
      data,
    };
  }

  async search(text: string | null | undefined) {
    if (!text) {
      throw new Error("query parameter text is required");
    }
    const sql =
        `select * from ${this.table} where name like '%${text}%'`;
    const { rows } = await client.execute(sql);
    return {
      status: 200,
      data: rows,
    };
  }

  async save(data: any) {
    const sql = `insert into ${this.table}(name) values(?)`;
    await client.execute(sql, [
      data.name,
    ]);
    return {
      status: 201,
      messsage: "Success save cats",
      data,
    };
  }

  async update(id: number, data: any) {
    const sql = `update ${this.table} set name = ? where id = ?`;
    await client.execute(sql, [
      data.name,
      id,
    ]);
    return {
      status: 200,
      messsage: `updated ${id}`,
      data,
    };
  }

  async destroy(id: number) {
    const { data } = await this.findById(id)
    const sql = `delete from ${this.table} where id = ?`;
    await client.execute(sql, [id]);
    return {
      status: 200,
      messsage: `deleted ${id}`,
      data
    };
  }
}
