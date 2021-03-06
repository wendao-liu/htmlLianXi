import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { name: 'index', path: '/', component: '@/pages/index' },
    { name: 'user', path: '/user/:id', component: '@/pages/user/[id]' },
    {
      path: '/welcome',
      component: '@/pages/index',
      name: '欢迎', // 兼容此写法
      icon: '213',
      // 更多功能查看
      // https://beta-pro.ant.design/docs/advanced-menu
      // ---
      // 新页面打开
      // target: '_blank',
      // 不展示顶栏
      // headerRender: false,
      // 不展示页脚
      // footerRender: false,
      // 不展示菜单
      // menuRender: false,
      // 不展示菜单顶栏
      // menuHeaderRender: false,
      // 权限配置，需要与 plugin-access 插件配合使用
      // access: 'canRead',
      // // 隐藏子菜单
      // hideChildrenInMenu: true,
      // // 隐藏自己和子菜单
      // hideInMenu: true,
      // // 在面包屑中隐藏
      // hideInBreadcrumb: true,
      // 子项往上提，仍旧展示,
      // flatMenu: true,
    },
  ],

  fastRefresh: {},
  layout: {
    name: 'testtest',
    locale: true,
    layout: 'mix',
    theme: 'tech',
  },
});
