import { Injectable,UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt,Strategy } from "passport-jwt";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor (private prisma:PrismaService){
        super ({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:process.env.JWT_SECRET ||'seuSegredoSuperSecreto',
        });
    }
async validate (payload:any){
    const usuario =await this.prisma.usuario.findUnique({
        where:{id :payload.sub},
    });

    if (!usuario){
        throw new UnauthorizedException("Usuario não encontrado");
    }
    const{senha,...result}=usuario;
    return result;
  }
}