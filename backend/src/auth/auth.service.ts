import{
    Injectable,
    ConflictException,
    UnauthorizedException,
}from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
                                                                                          
@Injectable()
export class AuthService{
    constructor(
        private prisma :PrismaService,
        private jwtService :JwtService,
){}

async cadastro (createUserDto:CreateUserDto){
    const {nome,email,senha,role } = createUserDto;

    const usuarioExistente = await this.prisma.usuario.findUnique({
    where : {email},
    });
    if (usuarioExistente){
        throw new ConflictException('E-mail já cadastrado'); 
    }
    const salt = await bcrypt.genSalt(10);
    const senhaHash = await bcrypt.hash(senha, salt);

    const usuario = await this.prisma.usuario.create({
        data :{
            nome
        ,   email
        ,   senha : senhaHash
        ,   role,

        },
    });

    const {senha : _,...resultado}= usuario;
    return resultado;
}
async login(loginDto : LoginDto){
    const{email, senha}= loginDto;

    const usuario = await this.prisma.usuario.findUnique({
      where: {email},  
    });
if (!usuario){
    throw new UnauthorizedException('Email ou senha inválidos');
    }
const senhaValida = await bcrypt.compare(senha,usuario.senha);
if (!senhaValida){
    throw new UnauthorizedException('Email ou senha invalidos');
}


const payload = {
    sub :usuario.id
    ,email : usuario.email
    ,role : usuario.role
};
return{
    access_token:this.jwtService.sign(payload)
    ,user :{
        id : usuario.id
        ,nome :usuario.nome
        ,email :usuario.email
        ,role :usuario.role,
      },
    };
  }
}
