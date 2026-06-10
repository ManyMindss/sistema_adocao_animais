import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    cadastro(createUserDto: CreateUserDto): Promise<{
        id: number;
        nome: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: number;
            nome: string;
            email: string;
            role: import(".prisma/client").$Enums.Role;
        };
    }>;
    getPerfil(req: any): Promise<any>;
    rotaInstituicao(req: any): Promise<{
        message: string;
        user: any;
    }>;
}
