import { Controller, Get, Post } from '@nestjs/common';
import { CreateCourseUseCase } from 'src/academy/application/create-course-usecase';
import { GetCoursesUseCase } from 'src/academy/application/get-courses-usecase';

@Controller('academy/admin')
export class AdminCourseController {
  constructor(
    private readonly createCourseUseCase: CreateCourseUseCase,
    private readonly getCoursesUseCase: GetCoursesUseCase,
  ) {}

  @Post('/courses')
  async create() {
    const course = await this.createCourseUseCase.execute({
      title: 'Curso de Inglês',
      description: 'Aprenda inglês do zero ao avançado',
      language: 'ENG',
      type: 'PRINCIPAL',
    });

    return course;
  }

  @Get('/courses')
  findAll() {
    return this.getCoursesUseCase.execute();
  }
}
