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
} from "../deps.ts"
import { Schema as StocksSchema } from './stocks_schema.ts'
import { StocksService } from "./stocks_service.ts"
import { Stocks } from './stocks_dto.ts'
import { CommonController } from '../common/controller.ts'

@ApiBearerAuth()
@ApiDocument({
  name: "Stocks Endpoint",
  description: "Stocks that are available for selection in automated trading.",
})
@Controller("/stocks")
export class StocksController extends CommonController<Stocks> {
  @Inject(StocksService)
  protected readonly service!: StocksService

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
  @ApiOperation({ summary: "find by id stocks" })
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

  @ApiRequestBody(StocksSchema)
  @ApiResponse(201, { description: "Created" })
  @ApiResponse(404, { description: "Not Found" })
  @ApiOperation({ summary: "save" })
  @Status(201)
  @Validate(Stocks)
  @Post()
  async save() {
    return await super.save()
  }

  @ApiParameter({
    name: "id",
    in: "path",
    required: true,
  })
  @ApiRequestBody(StocksSchema)
  @ApiResponse(201, { description: "Updated" })
  @ApiResponse(404, { description: "Not Found" })
  @ApiOperation({ summary: "update stocks" })
  @Validate(Stocks)
  @Put("/:id")
  async update() {
    return await super.update()
  }
}
