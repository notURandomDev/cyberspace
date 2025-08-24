type BlogType = "tech" | "note";

interface Blog {
  title: string;
  gist: string;
  url: string;
  coverImg: string;
  type: BlogType;
  source: string;
}

const TECH_BLOGS: Blog[] = [
  {
    title:
      "微信小程序｜log writeFile err writeFile:fail the maximum size of the file storage limit is exceeded",
    gist: "log writefile err writefile:fail the maximum size of the file storage limit",
    url: "https://blog.csdn.net/Alchemist2124/article/details/149226341",
    type: "tech",
    source: "CSDN",
    coverImg:
      "https://i-blog.csdnimg.cn/direct/f22206578a0544aeba4af3e9c1bfa1ec.png",
  },
  {
    title: "GitHub｜关联了邮箱和用户名 但还是没有贡献记录",
    gist: "git提交没有被GitHub贡献图记录的解决方法｜github 推送代码不显示当日贡献",
    url: "https://blog.csdn.net/Alchemist2124/article/details/148636434",
    type: "tech",
    source: "CSDN",
    coverImg:
      "https://i-blog.csdnimg.cn/direct/d79bbc5d5ef34fc68ca776b28b44145a.png",
  },
  {
    title:
      "Taro踩坑｜UI库组件样式丢失｜[taro] 找不到页面 pages/index/index 依赖的自定义组件",
    gist: "[taro] 找不到页面 pages/index/index 依赖的自定义组件",
    url: "https://blog.csdn.net/Alchemist2124/article/details/148492327",
    type: "tech",
    source: "CSDN",
    coverImg:
      "https://i-blog.csdnimg.cn/direct/f2745fe46ab5420fa8323b846ddf718d.png",
  },
  {
    title: "在Docusaurus中的MD文件使用「HTML ＜img/＞」获取图片资源失败",
    gist: "在Docusaurus中的MD文件使用「HTML 」获取图片资源的正确方法_md的img",
    url: "https://blog.csdn.net/Alchemist2124/article/details/147395629",
    type: "tech",
    source: "CSDN",
    coverImg:
      "https://i-blog.csdnimg.cn/direct/d3cfe31569bd44eda09515bdc710f6ba.png",
  },
  {
    title:
      "React Native｜使用flexbox实现类似小红书的「瀑布流」/「砌体」/「Masonry」布局",
    gist: "如何在React Native中使用flexbox实现小红书的瀑布流 / 砌体 / Masonry布局？_react native 瀑布流",
    url: "https://blog.csdn.net/Alchemist2124/article/details/147047777",
    type: "tech",
    source: "CSDN",
    coverImg:
      "https://i-blog.csdnimg.cn/direct/6ae3f82e6bf14789ac3e1d3d2eaf4ea0.png",
  },
  {
    title: "【React Native】实现SSE聊天视图的自动滚动",
    gist: "在React Native的AI聊天（SSE）应用中实现ScrollView视图的自滚动",
    url: "https://blog.csdn.net/Alchemist2124/article/details/146461112",
    type: "tech",
    source: "CSDN",
    coverImg:
      "https://i-blog.csdnimg.cn/direct/158d0fab30c14be79042921cdd6c19cf.jpeg",
  },
  {
    title:
      "expo-video | 使用自定义视频进度条组件更新视频进度 | player.seekBy()和player.currentTime的区别",
    gist: "使用expo/react native中的expo-video库，实现视频自定义控件的实现。以及记录player.seekBy()和player.currentTime使用的区别",
    url: "https://blog.csdn.net/Alchemist2124/article/details/145891045",
    type: "tech",
    source: "CSDN",
    coverImg:
      "https://i-blog.csdnimg.cn/direct/14f69bc2bd4b4d2d93b6dda8acd5909d.png",
  },
  {
    title: "rnr | 解决React Native Reusables无法使用tailwind样式问题",
    gist: "rnr | 解决React Native Resusables中无法使用tailwind样式的问题",
    url: "https://blog.csdn.net/Alchemist2124/article/details/145604675",
    type: "tech",
    source: "CSDN",
    coverImg:
      "https://i-blog.csdnimg.cn/direct/330db29efb4742f280735c93f0170b81.png",
  },
  {
    title:
      "记录第一次将Excel文件作为数据源导入 MS SQL Server Management Studio",
    gist: "本文介绍了如何从Excel文件导入SQLServer数据库，推荐使用CSV格式的平面文件。详细步骤包括文件转换、数据导入过程中的问题处理，如DBNull.Value错误和科学计数法显示问题的解决方案。",
    url: "https://blog.csdn.net/Alchemist2124/article/details/134866125",
    type: "tech",
    source: "CSDN",
    coverImg:
      "https://i-blog.csdnimg.cn/blog_migrate/cover/729956db2451a5f266c75c69c578cae3.png",
  },
];

export const BLOGS: Blog[] = [...TECH_BLOGS];
