routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state({
            name: "content",
            url: '/',
            controller: 'myCtrl',
            views: {
                "": { templateUrl: '/view/content.html' },
                "header@content": { templateUrl: '/view/head.html' },
                "body@content": { templateUrl: '/view/show.html' },
            }
        }).state({
            name: 'content.hello',
            url: 'hello',
            views: {
                "body@content": { templateUrl: '/view/show.html' },
            }
            // controller:"myCtrl",
        })
        .state({
            name: 'content.setting',
            url: 'setting',
            views: {
                "body@content": { templateUrl: '/view/config.html' },
            }
        })
        .state({
            name: 'content.setting.list',
            url: '/list',
            views: {
                "ad": { templateUrl: '/view/list.html' },
            }
        })
        .state({
            name: 'content.setting.new',
            url: '/new',
            views: {
                "ad": { templateUrl: '/admin/new/new.html' },
            }
        })
        .state({
            name: 'content.search',
            url: 'search',
            views: {
                "body@content": { templateUrl: '/view/search.html' },
            }
        })
}