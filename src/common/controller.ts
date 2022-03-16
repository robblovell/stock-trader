import {
    BaseController,
} from '../deps.ts'
import { Service } from './service.ts'
import { emit } from '../ws.ts'

export abstract class CommonController<T> extends BaseController {
    protected abstract readonly service: Service<T>

    async findAll() {
        return await this.service.findAll()
    }

    async search() {
        const {text} = this.request.query
        return await this.service.search(text)
    }

    async findById() {
        const {id} = this.request.params
        return this.service.findById(id)
    }

    async destroy() {
        const {id} = this.request.params
        const result = await this.service.destroy(id)
        emit('destroy', result.data)
        return result
    }

    async save() {
        const body: T = this.request.parsedBody as T
        const result = await this.service.save(body)
        emit('save', result.data)
        return result
    }

    async update() {
        const body: T = this.request.parsedBody as T
        const {id} = this.request.params
        const result = await this.service.update(id, body)
        emit('update', result.data)
        return result
    }
}
