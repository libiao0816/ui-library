// Jest 运行在 Node 里，需要 CJS；必须在加载 Babel 配置前设置
process.env.BUILD_FORMAT = 'cjs'

module.exports = {
  // 测试环境为 jsdom
  testEnvironment: 'jsdom',
  // 测试路径忽略模式
  // 忽略 node_modules、lib、es 目录下的文件
  // 忽略 node_modules 目录下的文件
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/lib/', '<rootDir>/es/'],
  // 转换配置
  // 对所有 .ts、.tsx、.js、.jsx 文件使用 babel-jest 进行转换
  // 配置 babel-jest 使用自定义的 babel.config.js
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { configFile: './babel.config.js' }],
  },
  // 模块名称映射
  // 替换 @tarojs/components 为 test/mocks/taro-components.tsx
  // 用于在测试中使用 Taro 组件库
  // 避免在测试中引入 Taro 组件库的依赖
  moduleNameMapper: {
    '^@tarojs/components$': '<rootDir>/test/mocks/taro-components.tsx',
  },
  // 测试环境配置
  // 配置测试环境的全局变量
  // 例如，配置全局的 DOM 元素
  // 避免在测试中引入全局的 DOM 元素
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
}
