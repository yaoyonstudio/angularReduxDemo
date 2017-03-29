export default class TestCtrl {
  constructor (CONFIG, Ajax, $exceptionHandler) {
    this.title = 'Test page'
    // Ajax(url, params, method, fn, errFn)
    Ajax(CONFIG.API_URL + '/sliders', null, 'QUERY', (res) => {
      console.log(res)
    })
    // Ajax(CONFIG.EXTEND_URL + '/business/getTypea', null, 'GET', (res) => {
    //   console.log(res)
    // })
  }
}
TestCtrl.$inject = ['CONFIG', 'Ajax', '$exceptionHandler']
