routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
            name: 'content.login',
            url: 'login',
            views: {
                "body@content": { templateUrl: '/account/login/login.html' },
            }
        })
        .state({
            name: 'content.regist',
            url: 'regist',
            views: {
                "body@content": { templateUrl: '/account/regist/regist.html' },
            }
        })
       
}