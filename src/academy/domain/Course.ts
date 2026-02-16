import { randomUUID } from 'node:crypto';

export type CourseType = 'PRINCIPAL' | 'COMPLEMENTARY';
export type CourseLanguage = 'ENG' | 'ES' | 'FR';

export class Course {
  constructor(
    private readonly id: string,
    private readonly title: string,
    private readonly description: string,
    private readonly language: CourseLanguage,
    private readonly type: CourseType,
  ) {}

  static create(
    title: string,
    description: string,
    language: CourseLanguage,
    type: CourseType,
  ): Course {
    const courseId = randomUUID();
    return new Course(courseId, title, description, language, type);
  }
}
