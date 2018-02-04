export class Task
{
    constructor(title) {
        this.title = title;
        this.done = false;
    }

    isDone()
    {
        return this.done;
    }

    markTaskAsDone()
    {
        this.done = true;
    }
}
