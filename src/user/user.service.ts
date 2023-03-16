import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor (
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    ) {}

    async create(): Promise<Users>{
        const user = new Users();
    

        return this.userRepository.save(user);

    }

    async findAll(): Promise<Users[]>{
        return this.userRepository.find();
    }
    
    async findOne(id: number): Promise<Users>{
        return this.userRepository.findOne({where : {id} })
    }
}
