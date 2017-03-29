routing.$inject = ['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider']

export default function routing ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
  'ngInject'
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl',
      controllerAs: 'hc'
    })

    .state('test', {
      url: '/test',
      templateUrl: 'templates/test.html',
      controller: 'TestCtrl',
      controllerAs: 'tc'
    })

  $urlMatcherFactoryProvider.caseInsensitive(true)
  $urlRouterProvider.otherwise('/home')
  // $locationProvider.html5Mode(true)
}
