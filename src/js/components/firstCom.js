class firstCtrl {
  constructor () {
    this.$onInit = () => {
      console.log('init basic component')
    }
  }
  increase (num) {
    console.log(num)
    this.data.goods_num++
  }
  decrease (num) {
    console.log(num)
    if (this.data.goods_num > 1) {
      this.data.goods_num--
    }
  }
}

let firstCom = {
  bindings: {
    data: '<'
  },
  controller: firstCtrl,
  controllerAs: 'vm',
  template: '' +
    '<div class="basic">' +
      '<img ng-src="{{ vm.data.goods_pic }}" />' +
      '<h2>基本信息</h2>' +
      '<h3>{{ vm.data.goods_name }}<span>{{ vm.data.goods_price | currency: \'￥\' }}</span></h3>' +
      '<div class="counter"><button ng-click="vm.decrease(vm.data.goods_num)">-</button><input type="number" ng-model="vm.data.goods_num" /><button ng-click="vm.increase(vm.data.goods_num)">+</button></div>' +
      '<p>{{ vm.data.goods_desc }}</p>' +
    '</div>'
}
export default firstCom
