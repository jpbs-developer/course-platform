import { Module } from '@nestjs/common';
import { CreateCourseUseCase } from './application/create-course-usecase';
import {
  COURSE_REPOSITORY,
  CourseRepository,
} from './domain/contracts/course-repository';
import { CourseInMemoryRepository } from './infra/repositories/course-in-memory-repository';
import { AdminCourseController } from './infra/controllers/admin-course.controller';
import { GetCoursesUseCase } from './application/get-courses-usecase';

@Module({
  imports: [],
  providers: [
    {
      provide: COURSE_REPOSITORY,
      useClass: CourseInMemoryRepository,
    },
    {
      provide: CreateCourseUseCase,
      useFactory: (repository: CourseRepository) =>
        new CreateCourseUseCase(repository),
      inject: [COURSE_REPOSITORY],
    },
    {
      provide: GetCoursesUseCase,
      useFactory: (repository: CourseRepository) =>
        new GetCoursesUseCase(repository),
      inject: [COURSE_REPOSITORY],
    },
  ],
  controllers: [AdminCourseController],
  exports: [CreateCourseUseCase, GetCoursesUseCase],
})
export class AcademyModule {}
