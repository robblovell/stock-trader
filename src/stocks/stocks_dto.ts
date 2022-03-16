import { IsString } from "../deps.ts";

export class Stocks {
    @IsString()
    name!: string;
}
