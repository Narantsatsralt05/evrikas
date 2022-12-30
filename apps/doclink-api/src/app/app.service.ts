import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to doclink-api! By CI Naraa testing for Orgil' };
  }
}
