const ControllerModule = 'ControllerModule'

import angular from 'angular'

import HomeCtrl from './controllers/HomeCtrl'
import GoodsCtrl from './controllers/GoodsCtrl'
import TestCtrl from './controllers/TestCtrl'

angular.module(ControllerModule, [])
  .controller('HomeCtrl', HomeCtrl)
  .controller('GoodsCtrl', GoodsCtrl)
  .controller('TestCtrl', TestCtrl)

export default ControllerModule
