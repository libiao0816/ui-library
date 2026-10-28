// 样式副作用导入的类型声明，消除 ts(2882)
declare module '*.scss' {
  const content: Record<string, string>
  export default content
}
