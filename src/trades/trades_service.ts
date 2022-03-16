import { Trades } from './trades_dto.ts'
import { Service } from '../common/service.ts'

export class TradesService extends Service<Trades> {

  constructor() {
    super('trades')
  }
}
