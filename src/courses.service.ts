import { Injectable } from '@nestjs/common';
import { Courses } from './interfaces/courses.interface';
import { JsonConfig } from './json.config';

@Injectable()
export class CoursesService {
  jsonConfig: JsonConfig = new JsonConfig;
    
    findAll(): Courses[] {   
    return  this.jsonConfig.readJsonFile();
  }
}