// Jest 运行在 Node 里，需要 CJS；必须在加载 Babel 配置前设置
process.env.BUILD_FORMAT = 'cjs'

module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { configFile: './babel.config.js' }]
  },
  moduleNameMapper: {
    '^@tarojs/components$': '<rootDir>/test/mocks/taro-components.tsx'
  },
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts']
}