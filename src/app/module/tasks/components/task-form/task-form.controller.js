import { Task } from '../../model/Task';
export default class TaskForm {
    constructor(TaskRepository) {
        this.TaskRepository = TaskRepository;
        console.log("Instance created!");
    }

    $onInit() {
        this.title = '';
        console.log("Initialized");
    }

    save() {
        if (this.title === '') {
            return;
        }

        let task = new Task(this.title);
        this.TaskRepository.add({
            title: this.title,
            done: false
        });
        this.title = '';
    }
    static get $inject() {
        return ['TaskRepository']
    }
}
