import { Siswa } from "src/siswa/dto/siswa.entity";

export interface GetSiswa {
    statusCode: number;
    message: string;
    data: Siswa[]
}