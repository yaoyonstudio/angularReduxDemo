import angular from 'angular'
const AjaxService = 'AjaxService'

angular.module(AjaxService, [])
  .service('Ajax', ['$resource', '$rootScope', ($resource, $rootScope) => {
    return (url, params, method, fn, errFn) => {
      let RequestRes = $resource(url, params, {'post': 'POST'})
      if (method === 'GET') {
        RequestRes.get(params).$promise.then((res) => {
          if (res.status) {
            fn(res)
          } else {
            typeof errFn === 'function' ? errFn(res) : $rootScope.toastExceptionMsg(res)
          }
        }, (error) => {
          typeof errFn === 'function' ? errFn(error) : $rootScope.toastExceptionMsg(error)
        })
      } else if (method === 'POST') {
        RequestRes.post(params).$promise.then((res) => {
          if (res.status) {
            fn(res)
          } else {
            typeof errFn === 'function' ? errFn(res) : $rootScope.toastExceptionMsg(res)
          }
        }, (error) => {
          typeof errFn === 'function' ? errFn(error) : $rootScope.toastExceptionMsg(error)
        })
      } else if (method === 'QUERY') {
        RequestRes.query(params).$promise.then((res) => {
          fn(res)
        }, (error) => {
          typeof errFn === 'function' ? errFn(error) : $rootScope.toastExceptionMsg(error)
        })
      }
    }
  }])

export default AjaxService
