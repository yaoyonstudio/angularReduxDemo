// let testCom = {
//   bindings: {
//     data: '<'
//   },
//   controller: ['$scope', function ($scope) {
//     this.$onInit = function () {
//       console.log('onInit')
//       console.log(this.data)
//     }
//   }],
//   controllerAs: 'vm',
//   template: '' +
//     '<div style="border: 1px solid #ddd;">' +
//       '<p>testCom</p>' +
//       '<p>{{vm.data}}</p>' +
//     '</div>'
// }
// testCom.$inject = ['$scope']
// export default testCom

class testCtrl {
  constructor ($scope) {
    console.log('testCom init')
    this.$onInit = function () {
      console.log('onInit')
      console.log(this.data)
    }
  }
}
testCtrl.$inject = ['$scope']

let testCom = {
  bindings: {
    data: '<'
  },
  controller: testCtrl,
  controllerAs: 'vm',
  template: '' +
    '<div style="border: 1px solid #ddd;">' +
      '<p>testCom</p>' +
      '<p>{{vm.data}}</p>' +
    '</div>'
}
export default testCom
