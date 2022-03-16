import { IsString } from "../deps.ts";

export class Trades {
    @IsString()
    name!: string;
}
