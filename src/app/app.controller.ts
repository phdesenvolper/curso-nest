import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service.js';

@Controller('home') // /home
export class AppController {
 // constructor(private readonly appService: AppService) {}

  @Get('hello') // Método da Solicitacão -> Ler (Read) -> CRUD
  getHello(): string {
    return 'Qualquer coisa.';
  }

  @Get('exemplo')
  exemplo() {
    return 'Exemplo de Rota'
  }

}

