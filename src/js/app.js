import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngResource from 'angular-resource'

import routing from './router.config.js'
import appconfig from './app.config.js'
import ControllerModule from './controller'
import ComponentModule from './component'
import ServiceModule from './service'

angular.module('myApp', [uiRouter, ngResource, ControllerModule, ComponentModule, ServiceModule])
.constant('CONFIG', {
  'API_URL': 'http://localhost:3000',
  'EXTEND_URL': 'http://water.tigonetwork.com'
})
.config(routing)
.config(appconfig)
.run(['$browser', '$rootScope', function ($browser, $rootScope) {
  $browser.baseHref = function () { return '/' }
  $rootScope.toastExceptionMsg = function (msg) {
    console.log('全局错误处理')
    console.log(msg)
  }
}])
.config(['$provide', function ($provide) {
  $provide.decorator('$exceptionHandler', ['$delegate', '$injector', function ($delegate, $injector) {
    return function (exception, cause) {
      let $rootScope = $injector.get('$rootScope')
      $rootScope.toastExceptionMsg(exception)
      // $delegate(exception, cause)
      // $delegate(exception)
    }
  }])
}])
