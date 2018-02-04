import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import routes from './routes';
import {TASK_REPOSITORY_SERVICE_NAME, TaskRepository } from "./model/TaskRepository";
import taskList from './components/task-list';
import taskForm from './components/task-form';

export default angular.module('todoPoc.tasks', [uiRouter])
    .config(routes)
    .component('taskList', taskList)
    .component('taskForm', taskForm)
    .service(TASK_REPOSITORY_SERVICE_NAME, TaskRepository)
    .name;
