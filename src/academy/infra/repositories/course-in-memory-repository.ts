import { CourseRepository } from 'src/academy/domain/contracts/course-repository';
import { Course } from 'src/academy/domain/Course';

export class CourseInMemoryRepository implements CourseRepository {
  private courses: Course[] = [];

  save(course: Course): Promise<Course> {
    this.courses.push(course);
    return Promise.resolve(course);
  }

  findAll(): Promise<Course[]> {
    return Promise.resolve(this.courses);
  }
}
