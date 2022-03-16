import { WebSocketClient, StandardWebSocketClient } from 'https://deno.land/x/websocket@v0.1.3/mod.ts'

const endpoint = 'ws://127.0.0.1:3001'
let ws: WebSocketClient
let i=0
setInterval(() => {
    if (ws && !ws.isClosed) {
        ws.send('client says hi!'+i++)
        ws.send(JSON.stringify({
            event: 'create',
            collection: 'trade',
            data: {
                name: 'something'
            }
        }))
        ws.send(JSON.stringify([
            'create',
            'trade',
            {
                name: 'something'
            }
        ]))

        // ws.ping()
    } else {
        ws = new StandardWebSocketClient(endpoint)
        ws.on('open', () => {
            console.log('ws connected!')
            ws.send('connected')
        })
        ws.on('message', (message: MessageEvent) => {
            console.log('client received message::>', message.data, message.timeStamp, (message as any).origin)
        })
        ws.on('open', () => {
            console.log('open')
        })
        ws.on('close', () => {
            console.log('close')
        })
        ws.on('ping', (message: string) => {
            console.log('pinged', message)
        })
        ws.on('pong', (message: string) => {
            console.log('ponged', message)
        })
        ws.on('error', () => {
            console.log('error')
        })
    }
}, 2000)