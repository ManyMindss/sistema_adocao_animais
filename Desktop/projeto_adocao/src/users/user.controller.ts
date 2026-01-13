import { Controller, Get } from '@nestjs/common';

@Controller('users') 
export class UsersController {
  
  @Get()
  findAll(): string {
    return 'Lista de usuários';
  }
  @Get('Sobre')
  getSobre():string{
    return 'Sobre os usuarios do sitemas';

  }
  @Get('contato')
  gatContato():string{
    return "Entre em contato conosco : email@exemplo.com ";
  }
}