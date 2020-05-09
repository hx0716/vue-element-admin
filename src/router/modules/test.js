/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const testRouter = {
  path: '/test',
  component: Layout,
  redirect: '/test/test1',
  name: 'test',
  meta: {
    title: 'test',
    icon: 'table'
  },
  children: [
    {
      path: 'test1',
      component: () => import('@/views/test/test1'),
      name: 'test1',
      meta: { title: 'test1', roles: ['admin', 'editor'] }
    },
    {
      path: 'test2',
      component: () => import('@/views/test/test2'),
      name: 'test2',
      meta: { title: 'test2', roles: ['admin'] }
    },
    {
      path: 'test3',
      component: () => import('@/views/test/test3'),
      name: 'test3',
      meta: { title: 'test3', roles: ['admin'] }
    }
  ]
}
export default testRouter
