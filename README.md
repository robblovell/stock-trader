# Deno Stocks

The start of an automated stock trading system written in Deno.

## Create database and table

```bash
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
```
```bash
brew install mysql
brew services start mysql
mysql_secure_installation
mysql --user=root --password=Macro7!
```

```sql
CREATE DATABASE IF NOT EXISTS `dero-crud`;
USE `dero-crud`;
```
```sql
CREATE TABLE IF NOT EXISTS `trades` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(100) NOT NULL,
	PRIMARY KEY (`id`)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;
```
```sql
CREATE TABLE IF NOT EXISTS `stocks` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id`)
    )
    ENGINE=InnoDB DEFAULT CHARSET=latin1;
```

## Run 

Install denon
```bash
deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts
```

```bash
denon run --allow-net --allow-read src/app.ts
denon run --allow-net --allow-read src/wsClient.ts
```

## Rest APIs

navigate to: 

[http://localhost:3000/api-docs/v1#/](http://localhost:3000/api-docs/v1#/)

```bash
GET     /api/v1/stocks
GET     /api/v1/stocks/search
GET     /api/v1/stocks/:id
POST    /api/v1/stocks
PUT     /api/v1/stocks/:id
DELETE  /api/v1/stocks/:id
```

```bash
GET     /api/v1/trades
GET     /api/v1/trades/search
GET     /api/v1/trades/:id
POST    /api/v1/trades
PUT     /api/v1/trades/:id
DELETE  /api/v1/trades/:id
```
