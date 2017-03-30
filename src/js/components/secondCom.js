let secondCom = {
  bindings: {
    data: '<'
  },
  controllerAs: 'vm',
  template: '' +
    '<div class="detail">' +
      '<h2>详细信息</h2>' +
      '<ul>' +
        '<li>尺寸：{{ vm.data.goods_dmension }}</li>' +
        '<li>像素：{{ vm.data.goods_screen }}</li>' +
        '<li>电池：{{ vm.data.goods_battery }}</li>' +
        '<li>摄像头：{{ vm.data.goods_camera }}</li>' +
        '<li>内存：{{ vm.data.goods_memory }}</li>' +
      '</ul>' +
    '</div>'
}
export default secondCom
