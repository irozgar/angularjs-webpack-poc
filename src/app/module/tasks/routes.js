routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
    $stateProvider
        .state('list', {
            url: '/',
            template: require('./template.html'),
            resolve: {
                tasks: ['TaskRepository', (TaskRepository) => {
                    return TaskRepository.all();
                }]
            }
    })
}

export default routes;
