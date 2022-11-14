export default defineAppConfig({
  pages: ["pages/index/index", "pages/publish/index","pages/record/index","pages/template/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#B0B7C3",
    selectedColor: "#A5D63F",
    backgroundColor: "#FFFFFF",
    borderStyle: "white",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "./assets/personal-space.png",
        selectedIconPath: "./assets/active-personal-space.png",
        text: "个人中心",
      },
      {
        pagePath: "pages/record/index",
        iconPath: "./assets/record.png",
        selectedIconPath: "./assets/active-record.png",
        text: "我的记录",
      },
      {
        pagePath: "pages/template/index",
        iconPath: "./assets/template.png",
        selectedIconPath: "./assets/active-template.png",
        text: "模板中心",
      },
      {
        pagePath: "pages/publish/index",
        iconPath: "./assets/publish.png",
        selectedIconPath: "./assets/active-publish.png",
        text: "发布创建",
      },
    ],
  },
});
