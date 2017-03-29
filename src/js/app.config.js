appconfig.$inject = ['$httpProvider', '$httpParamSerializerJQLikeProvider']

export default function appconfig ($httpProvider, $httpParamSerializerJQLikeProvider) {
  'ngInject'
  $httpProvider.defaults.transformRequest.unshift($httpParamSerializerJQLikeProvider.$get())
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
}
