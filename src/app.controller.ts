import {Controller, Get, Post, Put} from '@nestjs/common';
import { Delete } from '@nestjs/common/decorators';

@Controller('report/income')
export class AppController {
  @Get('')
  getAllIncomeReports() {
    return [];
  }

   @Get(':id')
  getAllIncomeReports2() {
    return {};
   }
  
     @Post('')
  getAllIncomeReports3() {
    return {};
     }
       @Put(':id')
  getAllIncomeReports4() {
    return {};
       }
       @Delete(':id')
  getAllIncomeReports5() {
    return {};
  }
}





// //localhost:3000/report/income ab agr shuru sey he yeh path rkhna hai sb me report/income to ye dalna hai controller ka andr

// //localhost:3000/report/income/kuch bhi to is ley hum alag se method decorator me dalengay 