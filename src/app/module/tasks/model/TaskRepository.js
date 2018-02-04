export const TASK_REPOSITORY_SERVICE_NAME = 'TaskRepository';

export class TaskRepository
{
    constructor() {
        this.tasks = [];
    }

    all()
    {
        return this.tasks;
    }

    add(task) {
        this.tasks.push(task);
    }
}
