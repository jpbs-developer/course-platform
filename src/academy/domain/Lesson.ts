export class Lesson {
  constructor(
    private readonly id: string,
    private readonly title: string,
    private readonly order: number,
    private readonly unit: number,
    private readonly completed: boolean,
  ) {}
}
