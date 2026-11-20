// 采用社区约定预设。也可以在此基础上自定义:
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // header(首行整体)不能超过 72 个字符——逼你把一次提交拆小、说清
    // 规则名是 header-max-length,注意不是 subject-maxlength(不存在)
    'header-max-length': [2, 'always', 72],
  },
}
