import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return `This Service is running on PORT ${process.env.PORT}`;
  }

  @Get('random')
  getRandomNumber(): number {
    return Math.floor(Math.random() * 100);
  }

  @Get('app1')
  app1(): string {
    return `APP 1 \nThis Service is running on PORT ${process.env.PORT}`;
  }
  @Get('app2')
  app2(): string {
    return `APP 2 \nThis Service is running on PORT ${process.env.PORT}`;
  }
}
