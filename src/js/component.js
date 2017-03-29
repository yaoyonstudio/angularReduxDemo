const ComponentModule = 'ComponentModule'

import angular from 'angular'

import testCom from './components/testCom'

angular.module(ComponentModule, [])
  .component('testCom', testCom)

export default ComponentModule
