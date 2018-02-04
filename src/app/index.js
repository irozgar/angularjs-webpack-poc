import angular from 'angular';
import uiRouter from '@uirouter/angularjs'

import routes from './routes'
import tasks from './module/tasks';

angular.module('todoPoc', [uiRouter, tasks])
    .config(routes);
