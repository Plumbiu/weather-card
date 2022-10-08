# 天气小卡片

## 技术栈

Vue3、axios、Vuex、ElementPlus、Echarts等

## 版本

### Version 0.1(测试版)

基本功能：

- 实时天气：天气展示、变化、建议；温湿度；降水概率；24小时温度和风级预告和其他数据。

- 天气预报：16天内平均温湿度、天气、风

### Version 0.2

将静态json文件转为从服务器获取

版本更新：

- 修复了城市选择天气预报数据不更新的bug
- 修复地图不能滑动问题

### Version 0.3

版本更新：

- 修复天气预报地图切换时消失的BUG

### Version 0.4

版本更新：

- 页面分组件编写
- 按需引入Echarts和ElementPlus，减少打包体积

### Version 1.0

添加城市选择(默认杭州市)和城市展示，将ElementPlus的tabs换成menu

版本更新

- 更改了实时天气第二个面板样式，使其与第一个面板对齐；

- 修改了各个组件中computed return的数据，使数据更合理；

- 修改了 ElButton 的字体大小和最大宽度；

- 修改了 ElMenuItem 的宽度，这样高亮时不会与选择城市的按钮重合；

- 修改了 ElMenu 的高度，这样高亮时的底边框与头部更加契合。

### Version 1.1

天气预报板块UI重置

- 将面板一和二修改为了轮播图，展示接下来15天的平均温度和平均湿度

- Echarts 图表将风速去除，改为穿衣建议
- 修复切换城市图表不更新的BUG

### Version 1.2

版本更新

- 新增暗夜模式切换，并将全局样式改写:deep，易于维护
- 将实时天气和天气预报合并为sub-menu天气
- 变量修改，现在代码内部的插值表达式不再总是以data开头了

### Verison 1.3

版本更新

- 引入[unplugin-element-plus](https://github.com/element-plus/unplugin-element-plus)包，显著减少打包体积
- 引入新的城市JSON数据，显著减少加载时间
- 修改el-sub-menu引用错误的bug

### Version 1.4

版本更新

- 修改了遮罩层，这次可以正常显示遮罩层了

### Version 1.5

版本更新

- 新增位置获取，不过手机端有点问题，所以手机端默认显示杭州

### Version 1.6

版本更新

- 撤回获取位置，因为Bug太多

等用到百度的那个API吧，还没有申请上

## 已知Bug

- tnnd，电脑端点击sub-menu好好的，手机端还得再点几下别的区域才能收起来

- el-switch 并不是响应式的，电脑端UI会崩