import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CoursesService } from './courses.service';
import { Courses } from './interfaces/courses.interface';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  async findAll(): Promise<Courses[]> {
    return this.coursesService.findAll();
  }
}