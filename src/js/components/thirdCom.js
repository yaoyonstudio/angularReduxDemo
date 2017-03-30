class thirdCtrl {
  constructor () {
    this.$onInit = () => {
      console.log(this.data)
      this.data.goods_num = parseInt(this.data.goods_num)
      this.data.goods_price = parseFloat(this.data.goods_price)
    }
  }
}
let thirdCom = {
  bindings: {
    data: '<'
  },
  controller: thirdCtrl,
  controllerAs: 'vm',
  template: '' +
    '<div class="buy">' +
      '<p>{{ vm.data.goods_num * vm.data.goods_price | currency: \'￥\' }}</p>' +
      '<button>立即购买</button>' +
    '</div>'
}
export default thirdCom
