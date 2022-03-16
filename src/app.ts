import { TradesController } from './trades/trades_controller.ts'
import { Dero, DocumentBuilder, swagger, validateOrReject } from './deps.ts'
import { StocksController } from './stocks/stocks_controller.ts'
import './ws.ts'

class App extends Dero {
    constructor() {
        super({
            // class validator
            classValidator: validateOrReject,
        })
        this.use({class: [TradesController]})
        this.use({class: [StocksController]})
        const doc = new DocumentBuilder()
            .setInfo({
                title: 'This amazing API',
                version: '1.0.0',
                description: 'Lorem ipsum',
            })
            .addBearerAuth()
            .addServer('http://localhost:3000')
            .build()
        swagger(this, '/api-docs/v1', doc)
    }
}

await new App().listen(3000)
