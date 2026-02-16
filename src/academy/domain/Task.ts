type TaskType = 'VIDEO' | 'EXERCISE' | 'MEMORIZATION';

export class Task {
  constructor(
    private readonly id: string,
    private readonly title: string,
    private readonly description: string,
    private readonly completed: boolean,
    private readonly type: TaskType,
    private readonly order: number,
  ) {}
}
