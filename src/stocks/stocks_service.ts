import { Stocks } from './stocks_dto.ts'
import { Service } from '../common/service.ts'

export class StocksService extends Service<Stocks> {

  constructor() {
    super('cats')
  }
}
