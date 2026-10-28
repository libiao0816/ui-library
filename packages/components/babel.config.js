module.exports = (api) => {
  // esm 产物保留 import/export，cjs 产物转成 require/module.exports
  // 根据环境变量的 BUILD_FORMAT 来选择不同的 preset
  const isCJS = process.env.BUILD_FORMAT === 'cjs'
  // 告诉 babel 编译时，根据环境变量的 BUILD_FORMAT 来选择不同的 preset
  api.cache.using(() => process.env.BUILD_FORMAT)

  return {
    presets: [
        // 语法降级
      ['@babel/preset-env', { modules: isCJS ? 'commonjs' : false }],
        // 把 React 语法转换成 React DOM
      ['@babel/preset-react', { runtime: 'automatic' }],
        // 删除 typescript 语法中的类型注解
      '@babel/preset-typescript'
    ]
  }
}