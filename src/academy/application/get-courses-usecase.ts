import { CourseRepository } from '../domain/contracts/course-repository';

export class GetCoursesUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  execute() {
    return this.courseRepository.findAll();
  }
}
