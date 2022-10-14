import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { InputDto } from './inputDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/post-call')
  checkLog(@Body() input: InputDto) {
    console.log(
      '🚀 ~ file: app.controller.ts ~ line 16 ~ AppController ~ checkLog ~ input',
      input,
    );
    console.log('post call');
    return this.appService.checkLogs();
  }
}
