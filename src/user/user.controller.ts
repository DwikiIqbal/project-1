import { Controller, Get, Post, Param, Body } from "@nestjs/common"
import { UserService } from "./user.service";
import { Users } from "src/entity/user.entity";

@Controller('users')
    export class UserController{
        constructor(private readonly userService: UserService){}

        @Get()
        async findAll(): Promise<Users[]>{
            return this.userService.findAll()
        }

        @Get()
        async findOne( @Param('id') id: number ): Promise<Users>{
            return this.userService.findOne(id)
        }

        @Post()
        async create(@Body() user: Users): Promise<Users>{
            return this.userService.create()
        }
    }
