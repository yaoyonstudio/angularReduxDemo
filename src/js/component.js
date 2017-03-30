const ComponentModule = 'ComponentModule'

import angular from 'angular'

import testCom from './components/testCom'

import topCom from './components/topCom'
import firstCom from './components/firstCom'
import secondCom from './components/secondCom'
import thirdCom from './components/thirdCom'

angular.module(ComponentModule, [])
  .component('testCom', testCom)

  .component('topCom', topCom)
  .component('firstCom', firstCom)
  .component('secondCom', secondCom)
  .component('thirdCom', thirdCom)

export default ComponentModule
