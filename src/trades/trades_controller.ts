import {
  ApiBearerAuth,
  ApiDocument,
  ApiOperation,
  ApiParameter,
  ApiRequestBody,
  ApiResponse,
  Controller,
  Delete,
  Get,
  Inject,
  Post,
  Put,
  Status,
  Validate
} from '../deps.ts'
import { Schema as TradesSchema } from "./trades_schema.ts"
import { TradesService } from "./trades_service.ts"
import { Trades } from './trades_dto.ts'
import { CommonController } from '../common/controller.ts'

@ApiBearerAuth()
@ApiDocument({
  name: "Trades Endpoint",
  description: "Represents automated trade activity.",
})
@Controller("/trades")
export class TradesController extends CommonController<Trades> {
  @Inject(TradesService)
  protected readonly service!: TradesService

  @ApiResponse(200, { description: "OK" })
  @ApiResponse(404, { description: "Not Found" })
  @ApiOperation({ summary: "findAll" })
  @Get()
  async findAll() {
    return await super.findAll()
  }

  @ApiParameter({
    name: "text",
    in: "query",
    required: false,
  })
  @ApiResponse(200, { description: "OK" })
  @ApiResponse(404, { description: "Not Found" })
  @ApiOperation({ summary: "search" })
  @Get("/search")
  async search() {
    return await super.search()
  }

  @ApiParameter({
    name: "id",
    in: "path",
    required: true,
  })
  @ApiResponse(200, { description: "OK" })
  @ApiResponse(404, { description: "Not Found" })
  @ApiOperation({ summary: "find by id" })
  @Get("/:id")
  async findById() {
    return await super.findById()
  }

  @ApiParameter({
    name: "id",
    in: "path",
    required: true,
  })
  @ApiResponse(201, { description: "Delete" })
  @ApiResponse(404, { description: "Not Found" })
  @ApiOperation({ summary: "delete by id" })
  @Delete("/:id")
  async destroy() {
    return await super.destroy()
  }

  @ApiRequestBody(TradesSchema)
  @ApiResponse(201, { description: "Created" })
  @ApiResponse(404, { description: "Not Found" })
  @ApiOperation({ summary: "save" })
  @Status(201)
  @Validate(Trades)
  @Post()
  async save() {
    return await super.save()
  }

  @ApiParameter({
    name: "id",
    in: "path",
    required: true,
  })
  @ApiRequestBody(TradesSchema)
  @ApiResponse(201, { description: "Updated" })
  @ApiResponse(404, { description: "Not Found" })
  @ApiOperation({ summary: "update" })
  @Validate(Trades)
  @Put("/:id")
  async update() {
    return await super.update()
  }
}
