export const submenu = [
  {
    icon: "HomeFilled",
    index: "/systemHome",
    title: "系统首页",
  },
  {
    icon: "Grid",
    index: "/table",
    title: "基础表格",
  },
  {
    icon: "Link",
    index: "/tabs",
    title: "tab选项卡",
  },
  {
    icon: "FolderOpened",
    index: "3",
    title: "表单相关",
    subs: [
      {
        index: "/form",
        title: "基本表单",
      },
      {
        index: "/upload",
        title: "文件上传",
      },
      {
        index: "4",
        title: "三级菜单",
        subs: [
          {
            index: "/editor",
            title: "富文本编辑器",
          },
        ],
      },
    ],
  },
  {
    icon: "PieChart",
    index: "/charts",
    title: "schart图表",
  },
  {
    icon: "Setting",
    index: "7",
    title: "错误处理",
    subs: [
      {
        index: "/permission",
        title: "权限测试",
      },
      {
        index: "/404",
        title: "404页面",
      },
    ],
  },
  {
    icon: "UserFilled",
    index: "/donate",
    title: "支持作者",
  },
];
