export const submenu = [
  {
    icon: "HomeFilled",
    index: "/systemHome",
    title: "系统首页",
  },

  {
    icon: "Printer",
    index: "1",
    title: "订单管理",
    subs: [
      {
        index: "/table",
        title: "订单列表",
      },
    ],
  },
  {
    icon: "Coin",
    index: "2",
    title: "商品管理",
    subs: [
      {
        index: "/goodsList",
        title: "商品列表",
      },
      {
        index: "/addGoods",
        title: "商品添加",
      },
      {
        index: "/fileUpload",
        title: "文件上传",
      },
      {
        index: "4",
        title: "三级菜单",
        subs: [
          {
            index: "/editorView",
            title: "富文本编辑器",
          },
        ],
      },
    ],
  },
  {
    icon: "PieChart",
    index: "/chartView",
    title: "schart图表",
  },
  {
    icon: "Link",
    index: "/message",
    title: "信息管理",
  },
  {
    icon: "Setting",
    index: "7",
    title: "权限管理",
    subs: [
      {
        index: "/permission",
        title: "权限设置",
      },
      {
        index: "/404",
        title: "404页面",
      },
    ],
  },
  {
    icon: "UserFilled",
    index: "/authorSupport",
    title: "支持作者",
  },
];
