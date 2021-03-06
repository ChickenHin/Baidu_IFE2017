## 2017百度前端技术学院<br>
### 小薇学院：<br>
任务一：[零基础HTML编码](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-xiaowei/task1/task1.html)
<br>
任务二：[零基础HTML及CSS编码（一）](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-xiaowei/task2/task2.html)
<br>
任务三：[css三栏布局](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-xiaowei/task3/index.html)
* 流式布局：
  * 左float:left;右float:right;中间margin-left,margin-right;
  * 顺序左右中
  * 缺点：中间部分不能先显示，而且应该避免遇到清除浮动。
* 绝对定位布局：
  * 左position:left;top:0;left:0;右position:right;top:0;right:0;中间margin-left,margin-right;
  * 顺序无所谓
  * 缺点：如果中间栏有最小宽度限制，或者存在有宽度的内部元素，当浏览器宽度小到一定程度时，会发生层重叠的情况。
* 圣杯布局：
  * 左右中float:left;左margin-left:-100%;右margin-left:-200px;
  * 为了保证中间部分不被遮挡，容器padding:0 200px;左position:relative;left:-200px;右position:relative;right:-200px;
  * 顺序中左右
* 双飞翼布局：
  * 左右中float:left;左margin-left:-100%;右margin-left:-200px;
  * 为了保证中间部分不被遮挡，中间内定义一个center-inner，设置margin-left,margin-right;
  * 顺序中左右
* BFC布局：
  * 左float:left;右float:right;中overflow:hidden;(形成BFC,不与浮动元素重叠)
  * 顺序左右中
  * 缺点：中间部分不能先显示，而且应该避免遇到清除浮动。
* table布局：
  * 容器display:table;左右中display:table-cell
  * 顺序左中右
  * 缺点：无法设置栏间距
* flex布局：
  * 容器display:flex;左width:200px;右width:200px;中flex:1;
  * 顺序无所谓，可以通过order设置
  * 缺点：兼容性不是很好

任务四：[定位和居中问题](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-xiaowei/task4/task4.html)
* 水平居中：
  * 块级元素：
   * 宽度固定：margin:0 auto;或者position:absolute;left:50%;margin-left:-(width/2)px;
   * 宽度不固定：position:absolute;left:50%;transform:translateY(-50%);
   * 子元素设置display:inline-block;父元素设置text-align:center;
   * 子元素父元素浮动float:left，父元素设置position:relative;left:50%;子元素设置position:relative;right:50%
  * 行内元素：
   * text-align:center;
* 垂直居中：
  * 块级元素：
   * 高度固定：position:absolute;top:50%;margin-top:-50%;
   * 高度不固定：position:absolute;top:50%;transform:translateY(-50%);
  * 行内元素：
   * padding-top == padding-bottom
   * line-height == 容器height
   * display:table-cell;vertical-align:middle;
   * 父元素display:flex; justify-content: center;

任务五：[零基础HTML及CSS编码（二）](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-xiaowei/task5/task5.html)
* 表单中设置所有label右对齐text-align:right;

任务六：[通过HTML及CSS模拟报纸排版](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-xiaowei/task6/task6.html)
* 写的不好不好不好

任务七：[实现常见的技术产品官网的页面架构及样式布局](http://htmlpreview.github.io/https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-xiaowei/task7/task7.html)

任务八：[响应式网格（栅格化）布局](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-xiaowei/task8/task8.html)

任务九：[使用HTML/CSS实现一个复杂页面](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-xiaowei/task7/task7.html)

### 斌斌学院：<br>
任务一：[零基础JavaScript编码(一)](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-binbin/task1/js-task1.html)
<br>
任务二：[零基础JavaScript编码（二）](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-binbin/task2/js-task2.html)
<br>
任务三：[零基础JavaScript编码（三）](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-binbin/task3/js-task3.html)
<br>
任务四：[基础JavaScript练习（一）（二）（三）](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-binbin/task4/js-task4.html)
<br>
任务九：[JavaScript和树（一）（二）（三）](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-binbin/task9/js-task9.html)

### 耀耀学院：<br>
任务二：[表单（二）多个表单项的动态校验](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-yaoyao/task1/ytask1.html)
<br>
任务三：[表单（三）联动](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-yaoyao/task3/ytask3.html)
<br>
任务四：[听指令的小方块（一）（二）](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-yaoyao/task4/ytask4.html)
<br>
任务六：[UI组件之浮出层](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-yaoyao/task6/ytask6.html)
<br>
任务七：[UI组件之排序表格](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-yaoyao/task7/ytask7.html)

### 糯米学院：<br>
任务一：[有趣的鼠标悬浮模糊效果](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-nuomi/task1/index.html)
<br>
任务二：[动态数据绑定（一）](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-nuomi/task2/index.html)
<br>
任务三：[自定义网页右键菜单](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-nuomi/task3/index.html)
<br>
任务四：[使用CSS实现折叠面板](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-nuomi/task4/index.html)
<br>
任务五：[正则表达式之入门](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-nuomi/task5/index.html)
<br>
任务六：[CSS3饼状loading效果](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-nuomi/task6/index.html)
<br>
任务七：[CSS3实现3D 轮播图](http://htmlpreview.github.io/?https://github.com/ChickenHin/Baidu_IFE2017/blob/master/IFE-nuomi/task7/index.html)
<br>
