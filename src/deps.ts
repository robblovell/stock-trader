declare global {
  interface ReadableStream<R> {
    getIterator(): any
  }
}
export {
  ApiBearerAuth,
  ApiDocument,
  ApiOperation,
  ApiParameter,
  ApiRequestBody,
  ApiResponse,
  DocumentBuilder,
  swagger,
} from "https://deno.land/x/dero_swagger@0.0.6/mod.ts";

export {
  BaseController,
  Controller,
  Delete,
  Dero,
  Get,
  Inject,
  Post,
  Put,
  Status,
  Validate,
  Wares,
} from "https://deno.land/x/dero@1.2.4/mod.ts";

export {
  IsNumber,
  IsString,
  validateOrReject,
} from "https://cdn.skypack.dev/class-validator?dts";

// mysql client
export { Client } from "https://deno.land/x/mysql@v2.8.0/mod.ts";

