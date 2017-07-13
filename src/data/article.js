export default [
	{
		createTime: "2017/07/31",
		author: "YYM",
		title: "代码规范",
		subtitle: "代码规范介绍",
		filename: "CodeGuide",
		path: "CodeGuide.md",
		summary: "HTML: 语法: 使用4个空格代替缩进.嵌套的节点应该缩进.属性值用双引号.标签名全部小写.属性名全小写，分隔符为-.自定义属性全部 data-*.boolean属性指不要声明属性值.基本结构: 标签嵌套规范: 内联元素不能嵌套块元素.p, dt, h1 不能嵌套块元素.块元素与块元素平级、内联元素与内联元素平级.属性顺序(荐): id、class、name、data-*.src、for、type、href、value、max-length、pattern.placeholder、title、alt.required、readonly、disabled.推荐: 自闭合标签结尾不加/.CSS:...",
		component: () => System.import('article/CodeGuide.md')
	},
	{
		createTime: "2017/07/13",
		author: "YYM",
		title: "git配置及命令介绍",
		subtitle: "git配置及命令介绍",
		filename: "git",
		path: "git.md",
		summary: "Git使用介绍: 简介: Git是一个分布式版本控制软件, 2005年发布.之前的版本管理工具: CVS、Subversion、SVN.通过Git进行版本控制的软件源代码托管服务的主流网站有: Github、Gitlab、Bitbucket.国产代码托管平台: 码云、Coding.Git工具: 命令行、编辑器集成、Github客户端、Bitbucket客户端(SourceTree).\"Git很强大，也很简单。全部命令非常多，但完成日常工作只需要掌握 极其少数 的命令即可。其他的可以在工作中遇到调整再去学习。 建议初学者使用命令行操作, 使用客户端仅查看变化以便理解git的作用\" 安装: Git...",
		component: () => System.import('article/git.md')
	}
]