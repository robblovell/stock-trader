import { WebSocketClient, WebSocketServer } from 'https://deno.land/x/websocket@v0.1.3/mod.ts'

export const wss = new WebSocketServer(3001)
export const sockets: WebSocketClient[] = []
export const emit = (event: string, data: any) => {
    let i = 0
    for (const socket of sockets) {
        console.log('emit ', i++, data)
        socket.send(JSON.stringify({
            event,
            data,
            message: 'the server sent this'
        }))
    }
}

wss.on('connection', (ws: WebSocketClient) => {
    ws.on('message', (message: string) => {
        console.log('server received message:::>', message)
        ws.send('server says hi!')
    })
    ws.on('error', (message: string) => {
        console.log('error', message)
    })
    ws.on('close', (message: string) => {
        console.log('closed', message)
        const index = sockets.indexOf(ws, 0)
        if (index > -1) {
            sockets.splice(index, 1)
        }
        console.log(sockets.length)
    })
    sockets.push(ws)
    console.log(sockets.length)
})

