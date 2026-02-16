import { Course } from '../Course';
export const COURSE_REPOSITORY = Symbol('COURSE_REPOSITORY');

export interface CourseRepository {
  save(course: Course): Promise<Course>;
  findAll(): Promise<Course[]>;
}
