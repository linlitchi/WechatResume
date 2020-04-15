// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 0,
    width: 0,
    name: "林子敬",
    spell: "Lin Zijing",
    job: "初级前端开发",
    exp: "react项目经验",
    tel: "15778095523",
    sex: "女",
    age: 24,
    email: "511074688@qq.com",
    address: "南宁市青秀区仙葫开发区",
    skill: [
      { name: "HTML/CSS/JavaScript", percent: 70 },
      { name: "jQuery/bootstrap", percent: 60 },
      { name: "React/React-redux", percent: 50 },
      { name: "Vue/mpvue", percent: 60 }
    ],
    education: [
      {
        school: "云南财经大学",
        major: "统计学专业（本科）",
        year: "2013-2017",
        desc: "统计学是理学门类下的一级学科，主要研究各种随机现象的本质与内在规律性，以及各种类型数据的科学处理和分析方法。"
      }, {
        school: "南宁市第三中学",
        major: "理科",
        year: "2010-2013",
        desc: ""
      }
    ],
    work: [
      {
        company: "北京嘀嘀无限科技发展有限公司",
        job: "数据运营实习生",
        year: "2017/01-2017/04",
        desc: "发布并跟踪业务日报，及时发现日报中呈现的问题。定期进行业务数据复盘和探索性数据分析，为部门月度/季度规划提供决策依据。与产品同事协作，推进产品和业务流程的完善和迭代。"
      },
      {
        company: "广西振企网络技术有限公司",
        job: "出纳",
        year: "2017/05-2017/12",
        desc: "根据银行的结算制度和公司审批及报销制度，完成现金收付工作。及时登记现金日记账和银行日记账，填写货币资金日报表，及时报送。负责按公司要求办理银行账户的设立、销户和年检，维持公司资金收付及账户正常使用。"
      },
      {
        company: "南宁市江南区卫生健康局",
        job: "党政办工作人员",
        year: "2017/12-2019/06",
        desc: "负责涉及纪检监察、组织部牵头的综合文稿的草拟。考核督查、党风廉政建设、纪检监察、团委、党建“两新”等工作。"
      }
    ],
    project: [
      {
        name: "读书微信小程序",
        desc: "项目是由mpvue开发的读书小程序，通过脚手架搭建项目，项目中运用了路由跳转和vuex进行状态管理，集成scss结合Vant Weapp编写样式，在首页开发中完成了搜索组件、图书卡片组件、图片组件、Banner组件、推荐组件，并且完成用户授权开发和页面授权，在搜索页开发中完成了标签组件、标签分组、搜索分类组件、搜索列表、搜索详情。"
      },
      {
        name: "电商首页",
        desc: "由jQuery库实现的电商web页面，目前已实现导航栏下拉菜单的调出及动画模块，动画为了兼容各平台和浏览器，包含jQuery默认动画、CSS3动画、js动画3种形式。"
      },
      {
        name: "简书首页",
        desc: "项目的主体是React的PC端项目，通过脚手架搭建，使用redux进行应用数据管理，提高应用可维护性，在immutable的数据管理框架下用PureComponent组件，减少不必要的页面渲染，通过路由跳转实现单页面应用，提高加载速度，配合异步组件，不会渲染未切换到的页面（如：详情页），页面样式上使用了styled-components模块，ajax请求获取数据的api由本地json文件暂替。"
      }
    ],
    introduction: "本人性格开朗、稳重、有活力，待人热情、真诚；对待工作认真负责，善于沟通、协调有较强的组织能力与团队精神；上进心强、勤于学习能不断提高自身的能力与综合素质。在未来的工作中，我将以充沛的精力，刻苦钻研的精神来努力工作，稳定地提高自己的工作能力，与企业同步发展。"

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var height = wx.getSystemInfoSync().windowHeight
    var width = wx.getSystemInfoSync().windowWidth
    this.setData({
      height: height,
      width: width
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})