import { defineConfig } from 'dumi';

export default defineConfig({
  utoopack: {},
  resolve: {
    // 组件文档 md，每个组件一个文件
    docDirs: ['docs'],
    // 解析组件库源码里的 TS 类型，自动生成 API 表
    // 注意：dumi 解析的是「类型」不是「运行时」，Taro 组件的 tsx 照常能解析
    atomDirs: [{ type: 'component', dir: '../components/src' }],
  },
  themeConfig: {
    name: 'lb-ui-docs',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components/button' },
    ],
  },
});
