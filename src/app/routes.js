
routes.$inject = ['$urlRouterProvider'];

function routes($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}

export default routes;
