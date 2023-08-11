chainWebpack: config => {
    /** Webpack rule to handle some non-image assets that we'll use */
    config.module
      .rule('files')
      .test(/\.(pdf|zip|ait|log|txt)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: `[path][name].[ext]`,
        limit: 10000,
        esModule: false,
      });
    /** Explicitly setting esModule:false
     * to avoid this issue https://github.com/vuejs/vue-loader/issues/1612
     */
    config.module
      .rule('images')
      .use('url-loader')
      .options({
        limit: 10000,
        esModule: false,
      });
  }



	import { defaultTheme } from '@vuepress/theme-default'

	export default {
		theme: defaultTheme({
		colorMode: 'dark',
		navbar: [
			{
				text: 'Country Road~',
				link: '/readme.md',
			},
			{
				text: 'Grey Coat Split in Class',
				children:[
					{text: '理工女手稿', link: '/engScript/engScript.md'},
					{text: '搓天线日志', link: '/antennaLog/antennaLog.md'},
					{text: '杂谈', link: '/articles/article.md', },
				],
			},
			{
				text: 'Crossword',
				link: '/crossword/cw.md',
			},
		],
		sidebar: [
			{
				text: 'Country Road~',
				link: '/readme.md',
			},
			{
				text: 'Grey Coat Split in Class',
				children:[
					{text: '理工女手稿', link: '/engScript/engScript.md'},
					{text: '搓天线日志', link: '/antennaLog/antennaLog.md'},
					{text: '杂谈', link: '/articles/article.md', },
				],
			},
			{
				text: 'Crossword',
				link: '/crossword/cw.md',
			},
		], 
		backToHome: 'Country Road~',
		}),
	}