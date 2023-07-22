module.exports = {
  base: '/',
  lang: 'zh-CN',
  title: 'http-hub-dst',
  description: '基于 axios 的网关实例中心客户端',
  head: [
    [
      'link',
      { rel: 'icon', href: '/images/logo.png' } // 浏览器的标签栏的网页图标
    ]
  ],
  // 顶部导航条
  themeConfig: {
    nav: [
      {
        text: '介绍',
        link: '/pages/introduce.md',
      },
      {
        text: '指南',
        link: '/pages/guide.md',
      }
    ],
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://gitee.com/codeycw/http-hub-dst.git',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    // docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    // editLinks: false,
    // 默认为 "Edit this page"
    // editLinkText: '帮助我们改善此页面！'

    lastUpdated: '上次更新',

  }
}
