const goods = () => import('@/views/product/goods/goods.vue')
export default {
  path: '/product/goods',
  name: 'goods',
  component: goods,
  children: []
}
