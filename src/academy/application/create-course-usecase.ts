import { CourseRepository } from '../domain/contracts/course-repository';
import { Course, CourseLanguage, CourseType } from '../domain/Course';

type CreateCourseDTO = {
  title: string;
  description: string;
  language: CourseLanguage;
  type: CourseType;
};

export class CreateCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  execute(input: CreateCourseDTO) {
    const { title, description, language, type } = input;
    const course = Course.create(title, description, language, type);
    return this.courseRepository.save(course);
  }
}
