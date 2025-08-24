# Groove Shooter

## 需求概述

最开始，我构想的app是一个【Drummer Academy】。在这个app中，鼓手能够通过各种不同的模块得到多维度的训练，其中包括：

- 律动引导模块：通过播放不同的乐曲（在某个速度段较为典型的曲子），并分析每种律动速度的特点，以及适用的曲目风格等，帮助用户从多方面了解不同律动速度的实际应用场景。
- 律动跟踪模块：用户需要辨别播放曲目的速度，并选出与其速度最接近的一个选项；或用户需要辨别仅有的click速度，并将其输入到框中。
- 律动锁定模块：工具类功能，供用户熟悉各种律动，甚至在排练中进行使用。
- 经验成长模块：此模块用于展示用户的当前等级和数据统计及记录

![exp-growth.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/bacdc5c7-033f-4b6d-8a95-328d77ccc120/exp-growth.png)

![groove-guiding.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/f40ebd39-8829-4a9e-99ff-cbb3934b9d07/groove-guiding.png)

![groove-locking.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/c58bc8be-c36e-404f-a095-e9850fcf168e/groove-locking.png)

![groove-tracking.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/a74d8a67-0140-4b3f-ba28-58386eb703c4/groove-tracking.png)

![groove-tracking-2.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/f7944584-d83b-42bc-ad13-fef5a54d9b13/groove-tracking-2.png)

通过上述这些模块，用户能够在多维的练习中得到实质性的提升；并且通过app架构中的成长体系，能够有动力坚持使用软件，最终成为一个习惯。

但是一个教学体系的设计并不是一蹴而就的。除开精心地架构如何渐进式地提高教学的困难度，以及合理地囊括相关知识之外，光凭我一个人远远不够；要设计出一个好的教学体系，还需要获得很多专家的见解。

考虑到教学体系设计的复杂性，我决定先实现其中的**律动保持模块**。这个模块对知识体系的依赖弱，需要用户将手机放至哑鼓垫边上进行练习，从而保证用户击打哑鼓垫音频的有效输入；因此，此模块需要调用手机的硬件设备进行交互，预期的实现复杂度较高。

### 实际情况

事实上，我在实现该模块的时候遇到了很多意料之外的难题，再加上开发团队只有我一个人，没办法在这学期内完成所有模块的实现。

尽管如此，我最终完成了此模块所有功能的实现，并在预期的基础上添加了其它功能；除此之外，我还重新设计了app的UI，使该模块泛化成为一个独立的app，名为【Groove Shooter】。

右图的图标是我在Figma中设计的app图标，其寓意与app的功能息息相关；具有科技感的暗红色和亮青色也是app的主题色。

![app图标](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/4cf0cb7e-3fb1-4843-8ba8-5a2541e2ab39/groove-shooter-app-icon.png)

app图标

## 开发历程

在下文，我将讨论【Groove Shooter】的开发全流程

### 最初的功能实现构思

为了达成提升用户的律动保持能力的目标，我最初的构思是实现一个【表现标尺】。

在用户使用哑鼓垫练习的时候，该模块能启用手机的麦克风来实时检测外界音量的输入，通过计算输入音量峰值与标准节拍之间的差值，来计算用户节拍保持的稳定性。界面中的【表现标尺】上的指针能够实时进行移动，来将用户的表现进行可视化。

在此模块中，用户不仅能够跟随系统预设的训练进行练习，还能够通过自定义参数（节拍速度、音符时值）进行个性化的练习。

练习结束后，该模块能够通过准确率、稳定性指标等，来量化训练的成果，从而给予用户及时的反馈。

> 原型设计

![手绘稿](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/04863453-5560-4d82-b6b9-8d07b4c3a861/groove-keeping.png)

手绘稿

> 界面实现

![Groove Shooter - Performance Metric.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/90943f10-aafb-4f74-a9b0-45b8dbffb309/Groove_Shooter_-_Performance_Metric.jpg)

### 质疑

在实现过程中，我发现当前的界面存在一定的缺陷。

- 反馈元素单一：在原型设计中，律动保持模块只有一个反馈用户节拍稳定性的【表现标尺】，用户无法详细地得知自己打在哑鼓垫上的每一击与标准节拍之间的差距
- 节拍可视性差：界面中还缺少节拍反馈的控件，导致用户无法得知该信息。

### 缪斯Apps

为了能够提升使用该模块的用户体验，就必须想出一个解决方案，一个模式，能够直截了当地在视觉/听觉上，给用户标准节拍的反馈。

<aside>
<img src="notion://custom_emoji/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/1652ad4d-7872-8074-9f31-007a4daedcba" alt="notion://custom_emoji/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/1652ad4d-7872-8074-9f31-007a4daedcba" width="40px" />

> Pulse

此时，我就联想到了自己常用的节拍器软件【Pulse】。这个app将节拍可视化的方式是将每一个节拍表示成一道向外扩散的脉冲波。当然，除了视觉可视化之外，每一个节拍也会通过音频的方式播放出来。

![Pulse in Action](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/ee5983e0-caaf-4bf2-88ea-c43ae70937d0/9a1dec62-95ae-40ca-8555-72b3cd6806cd.png)

Pulse in Action

</aside>

<aside>
<img src="notion://custom_emoji/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/1652ad4d-7872-8093-9a4b-007a9490da97" alt="notion://custom_emoji/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/1652ad4d-7872-8093-9a4b-007a9490da97" width="40px" />

> Pro Metronome

【Pro Metronome】，是App Store中的另一款流行节拍器app。

![Pro Metronome in App Store](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/99ae8a68-8af5-4303-acad-380bdf659732/example-app.png)

Pro Metronome in App Store

与【Pulse】不同的是，【Pro Metronome】采用了4个矩形块来表示一个小节中的4拍，当前拍则是通过高亮来表示。

![Pro Metronome in Action](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/155e86b3-156a-41bd-a0cf-4838d1dd8ebf/pro-metronome-2.png)

Pro Metronome in Action

</aside>

这两个app给了我很大的启发，我是否也能通过类似的方式将节拍可视化呢？换言之，通过动画+节拍小节化的效果来呈现节拍，似乎是一种可行性较高的方案。

### 初代实现

> 节拍可视化

参考了上述两种现成的可行方案，我决定采用由能够闪烁的圆环组成的【4\*4】矩阵来将节拍可视化。

详细来说，该矩阵实际上是由4个团簇组成。从左到右的4个团簇分别代表组成一个小节的4拍，每一拍又被平均分成4份，每一份代表一个16分音符。

矩阵中最左边的左上角圆环代表了一个小节中第一拍的第一个16分音符。开始练习后，每一拍中的4个圆环将从上到下逐个闪烁；当前拍结束之后，就轮到下一拍的首个16分音符位的圆环开始闪烁。以此类推，循环往复，直至结束。

当然，圆环的闪烁频率是与设定的速度相符的。节拍速度单位为BPM（Beat Per Minute），即一分钟内有多少个Beat。

BPM与闪烁频率之间的换算公式为：

$$
standardInterval = \frac{ 240000}{(bpm * 4)}
$$

> 初代界面

![Groove Shooter - First Version.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/f88e700e-04a1-4f90-98fe-db178e05d36d/Groove_Shooter_-_First_Version.jpg)

> 监听算法

至此，完成了节拍可视化的大致思路。对于表现标尺，其本质思想是设置一个监听音频输入分贝值的算法，并将响应更新的频率设置成1ms（Expo-AV SDK所能处理更新的最小值）。该算法能够计算音频输入最新一次的分贝值与上一次分贝值的差值。若该差值大于一个阈值，则判定其为【**有效输入**】。

> 表现标尺

进一步完善监听算法，就能实现表现标尺的功能。

在当前监听算法的基础上，记录每一次有效输入在整段录音中的时刻。将最新一次有效输入的时刻值与上次有效输入的时刻值相减，就能得到用户使用鼓棒相邻两次击打哑鼓垫的时间差值。

$$
strikeInterval = curMillis - prevMills
$$

将该时间差值与标准时间差值相减，就能得出用户击打的实际速度与标准速度之间相差了多少。

$$
offset = strikeInterval - standardInterval
$$

如果`offset`的值小于0，代表用户的速度比标准速度慢；反之，则代表用户的速度比标准速度快。

当然，也存在`offset`的值刚好等于0的情况。考虑到分毫不差的情况少之又少，表现标尺的评估算法应当使用某种函数来与光标的位置来进行绑定。

> 交互模式合理性

在进一步完善表现标尺的评估函数之前，我暂时用简单的分段线性函数将用户表现与标尺光标进行了绑定，发现这种交互模式并不够直观。

表现标尺与用户击打哑鼓垫的行为之间的关系其实是间接的：

1. `offset`的值需要通过一层表现评估函数的计算才能通过表现标尺来展示出来
2. 表现标尺只能展现出最新一次的表现情况，无法展现出从录音开始到当前时刻的所有表现记录

### 流程梳理

![Flow Diagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/82026224-42a3-4c94-b129-ca93b48f37ad/Flow_Diagram.png)

### 灵感迸发

如何改进用户交互模式，让我头疼了很久；与此同时，我对当前界面的布局和配色也十分不满意。这两个因素的叠加，使项目步入了进度停滞阶段。

直到有一天，我在脑海中思索着界面上的圆环矩阵，突然灵光乍现。我意识到之前自己一直只把这些圆环视为节拍的指示灯；但如果这些指示灯的作用不仅是指示节拍呢？

如果把这些圆环视为靶，用户打击哑鼓垫的行为是射击，那么用户击打哑鼓垫速度的精确度便能通过中靶点与靶心之间的差距来展示出来。在这种交互模式下，一个小节中的每一个16分音符都是一个靶。因此，提升用户节拍控制能力的目标，在app中的映射，就是尽可能的提升射击每一个16分音符时值靶的精确度。

相较于表现标尺，使用音符时值靶交互的直观性得到了显著的提升。除此之外，”射击音符“的模式提升了练习的娱乐性，使练习不再枯燥乏味；同时，与生硬且具有评判性的“表现标尺”相比，用户对于“射击音符时值靶”的接受程度更高。

至此，这个app的性质从一个表现评估工具转变成了具有实用性性质的类游戏。

### 转换算法

> 离心算法（Eccentricity Algorithm）

$$
ecc = \frac{curTimer}{standardInterval}
$$

每一个16分音符靶开始闪烁的那一刻起，启动一个计时器。当收到有效输入时，将当前计时器的值`curTimer`传入离心算法中，与标准速度的时间间隔`standardInterval`相除，即可得出离心率。

> 随机位置算法（Random Position Algorithm）

为了使“射击时值靶”的体验更加真实，随机位置算法能够使弹孔在以偏心距为半径的圆环上随机分布，来模拟射击时弹道随机分布的特性。

```jsx
const calcDotPosition = (ecc) => {
  const randomAngle = Math.floor(Math.random() * 360);

  let xVal = 0.45;
  let yVal = 0.45;

  if (ecc > 0) {
    xVal = 0.45 + 0.45 * ecc * Math.cos((randomAngle / 180) * Math.PI);
    yVal = 0.45 + 0.45 * ecc * Math.sin((randomAngle / 180) * Math.PI);
  }

  const xStr = (xVal * 100).toFixed(2) + "%";
  const yStr = (yVal * 100).toFixed(2) + "%";

  return {
    x: xStr,
    y: yStr,
  };
};
```

### 主界面迭代

在有了功能实现的思路之后，我也重新调整了app的整体配色。将原本呆板的墨蓝色置换成具有科技气息的暗红色和亮青色。

![presentation-with-logo.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/c2353538-19fd-40a2-874f-3c927c002e08/presentation-with-logo.png)

> 参数控件

- 标准速度控制：通过点击增减按钮能够调节标准速度
- 阈值控制：可以调节监听算法灵敏度；用户可以操作阈值控制控件，调节阈值至最适应当前环境的值

> 音频控件

当监听算法判定分贝值为有效输入时，指示条会变成绿色。

- 音频输入指示条：若开启麦克风，指示条会根据当前环境的分贝值做出响应
- 麦克风控制：开启麦克风可以对周围环境的嘈杂程度进行检测

> 时值靶矩阵

矩阵会根据当前用户设置的速度进行轮回闪烁

- 拍号指示：指示当前处于第几拍
- 音符时值靶：用户能够在个性化界面中设置时值靶的样式

> 流程控件

- 开始/暂停按钮：开始/暂停练习
- 倒计时设置按钮：用户可以设置每次练习的时长；可以从预设的时长中选择，也能自定义时长

![Groove Shooter - Home Screen](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/e4d2228a-f019-48b6-9358-cf21e400a7dd/Groove_Shooter_-_Home_Screen.png)

Groove Shooter - Home Screen

### 分数弹窗

每次在用户完成练习之后，都会跳出一个分数弹窗，显示用户此次练习的数据。

- 速度：本次练习的BPM
- 精准度：用户的节拍准确率
- 时长：本次练习的时长；若用户选择的是自定义练习时长，则练习开始之后会设置一个计时器。

> 界面实现

![Groove Shooter - Scoring Screen.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/3f4a5972-8a54-4ee7-aade-76e51c491ac4/Groove_Shooter_-_Scoring_Screen.jpg)

点击【继续】按钮，上一次的弹孔记录清空。

> 原型设计

![scoring-screen.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/0a3b2a96-fb53-4c8e-9b23-b64459b87908/scoring-screen.png)

### 个性化设置

用户在主页点击屏幕右上角的正方体方块，就能进入个性化设置界面。

> 个人信息

- 用户信息
  - 用户头像：取用户名的首字母
  - 用户名：大写的用户名
- 数据信息
  - 练习总时长：记录用户所有练习的总时长
  - 练习次数：记录用户的练习次数
  - 精确率：记录用户的总体节拍准确率
- 登录状态管理按钮

> 自定义样式

- 预览：在选择样式之后，预览中的时值靶会闪烁
- 弹孔样式：提供不同形状的弹孔样式
- 靶环颜色：提供不同颜色的靶环颜色

> 用户登出

- 进行练习的数据不会记录
- 重新点击登录按钮，会跳转至登录界面

> 界面实现

![Groove Shooter - Customize Screen](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/7ae8578a-ceb9-4a9f-8b5a-01d3da0bef87/Groove_Shooter_-__Customize_Screen.png)

Groove Shooter - Customize Screen

> 原型设计

![customize-screen.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/d628d19b-f157-424c-bc93-10a5fd00d244/customize-screen.png)

### 登录界面

> 默认界面

![Groove Shooter -  Sign-in Screen.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/3b47cf3d-6b5b-4d81-9e7a-cfffcadaaae5/Groove_Shooter_-__Sign-in_Screen.png)

> 错误提示界面

![Groove Shooter -  Sign-in-Invalid Screen.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/2bc1e765-f6bf-4af8-8477-a361f78d9796/Groove_Shooter_-__Sign-in-Invalid_Screen.png)

### 注册界面

> 默认界面

![Groove Shooter -  Sign-up Screen.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/10b17d62-a86b-4d84-9b11-d4c27de0e7e0/Groove_Shooter_-__Sign-up_Screen.png)

> 错误提示界面

![Groove Shooter -  Sign-up-Invalid Screen.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/55e80535-361b-48b2-adf8-08a649bb7a17/Groove_Shooter_-__Sign-up-Invalid_Screen.png)

## 技术栈

> 前端

![expo+react.webp](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/bc0fbbd1-7ea7-4ab8-bb70-ae3b75ea45de/exporeact.webp)

<aside>
<img src="notion://custom_emoji/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/1652ad4d-7872-807c-a12e-007ad2d5e930" alt="notion://custom_emoji/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/1652ad4d-7872-807c-a12e-007ad2d5e930" width="40px" />

### Expo

Expo框架为React Native提供了高层次的封装，简化跨平台开发。

手机上的Expo Go应用能够使开发者可以在手机上实时查看代码更改的效果，无需构建或安装完整的应用包，为原生应用开发提供了很多便利

- expo-av：提供了处理音频的库，也是Groove Shooter使用最核心的库之一
</aside>

<aside>
<img src="notion://custom_emoji/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/1652ad4d-7872-8057-a93c-007a8e4da770" alt="notion://custom_emoji/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/1652ad4d-7872-8057-a93c-007a8e4da770" width="40px" />

### React Native

- react-native-async-storage：将用户偏好数据存储在本地
- react-native-reanimated：动画库
- react-native-react-navigation：提供导航功能的库，自定义性比expo所提供的expo-router强
- react-native-safe-area-context：提供UI安全区，保证了界面的一致性
</aside>

> 后端

![appwrite.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/01656a02-9431-471e-9341-ee9f0731fe07/appwrite.png)

<aside>
<img src="notion://custom_emoji/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/1652ad4d-7872-80c7-ba04-007af840d5d0" alt="notion://custom_emoji/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/1652ad4d-7872-80c7-ba04-007af840d5d0" width="40px" />

### appwrite

appwrite是一个开源的BaaS（Backend as a Service）平台。使用appwrite可以不用从头开始建立后端服务，简化了后端的工作流。

- 鉴权功能：不仅可以支持第三方登录，还支持开发者在appwrite的工作台管理用户的session，简洁方便
- 数据库：提供了图形化的数据库管理界面，操作方便
- 文件存储：相片、视频等文件能够存储在appwrite的云上
- SDK：提供的SDK操作方便、文档详细，使用起来轻松快捷
</aside>

## 项目拓展

### 优化

> 监听算法优化

在测试app的过程中，我发现在标准速度较高的情况下，监听算法不能很好地识别出两次间隔很近的击打哑鼓垫声音。这或许和监听函数的监听周期有关系，因为Expo AV所提供的监听周期极限就是1ms，由于设备硬件关系不能再短。因此，两次相邻很近的击打声不能全被识别为有效输入。

除此之外，当前的监听算法灵敏度是由用户根据环境嘈杂程度自主进行调节。这样做产生的问题就是可能会由于用户的操作不当，使监听函数不能发挥作用。这个问题的解决方法就是使用一个自适应算法，让监听算法能够根据当前环境动态调节阈值，删除暴露给用户调节阈值的接口。

> 数据存储优化

对于Groove Shooter这种轻量级的app，使用后端服务其实并不是必要的。数据完全可以本地化。这和最初设计app架构时欠缺考虑，以及对原生开发的数据存储方式不熟悉有关。

> 布局优化

开发的时候是通过在手机上安装Expo Go进行调试，因此不能改变屏幕的尺寸。假设App要上架应用商店，最好是能够在Mac上的模拟器对不同屏幕尺寸的布局进行测试，从而保证UI的一致性。

### 变现

虽然app实现变现比较难，但是变现并不是主要目的，而是在实现的过程中，可以学习到相关的知识，包括调用支付接口，实现资产管理等功能。

### 营销

回到最开始所提出的【Drummer Academy】的概念，我对这个app的幻想是能够成为得到全球鼓手认同的First and Only鼓手教学软件。

如果这个app真的得到了认可，营销的下一步就是与哑鼓垫制造厂商合作，推出【Drum Academy】专属的哑鼓垫。该哑鼓垫特点就是具有传感器，能够大大提高软件识别鼓手击打哑鼓垫的准确率，并且将此商品变为教学体系中不可或缺的一环。

当然，这些幻想的前提是【Drum Academy】的所有功能能够成功落地，并且得到广泛的业界认可；尽管很困难，但是这是我设计这款app的初衷。

## 课程建议

希望老师能在开发过程以及项目架构等方面多提供一些帮助。本学期的项目完全是我从头到尾自己做出来的。

尽管这个项目针对的群体较小，但是如果老师能在项目各个阶段提出以下这些建议，能使学生获得更多收获：

- 开发技术选型：对UI库、原生SDK库、后端BaaS平台的选择方面提出建议，并在必要时刻提供技术支持
- 走在技术前沿：对时下流行的开发技术进行了解，而不是一味地推崇对于低代码平台的使用；低代码平台对于项目管理以及业务逻辑复杂的项目并不适用，并不能对于开发技术的提升有实质性的帮助。相反的，如果能引导学生使用Cursor这类融合AI的IDE进行开发，并为学生订阅该平台服务的订阅费进行资助的话，能够对偏向开发实践的学生带来很大的帮助
- 提升项目寓意：详细了解学生项目的需求之后，根据老师自身的经验，对学生提出如何将App实现变现、吸引用户、推向市场等方面的建议；这能够使学生对于产品的理解更加深刻，以及对自己开发出来的应用更有自豪感

## 参考资料

### 律动速度范围的分类

[乐理知识：基本速度标记 如何确定想要的bpm 范围区间 节奏与时值 节拍](https://www.bilibili.com/read/cv36920474/)

### Font Awesome图标库

[Find the Perfect Icon for Your Project | Font Awesome](https://fontawesome.com/search)

Font Awesome - Search

### 如何在React Native中使用Font Awesome

[React Native](https://docs.fontawesome.com/web/use-with/react-native)

Font Awesome - Usage

### Heroicons图标库

[Heroicons](https://heroicons.com/outline)

Heroicons - Search

### Appwrite官方文档

[cloud.appwrite.io](https://cloud.appwrite.io/console/project-672b12e40010135663f0/overview/platforms)

Appwrite Console

### Appwrite技术问题解决帖子

https://github.com/appwrite/appwrite/issues/8867

### Tailwind CSS - UI解决方案

[Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.](https://tailwindcss.com/)

Tailwind CSS

### 用于配色的工具网站 - Coolors.co

[Coolors.co](https://coolors.co/0e1117-4d535b-8b949e-b9c1c9-e6edf3)

Color Palette

### Expo SDK的官方文档

[WebBrowser](https://docs.expo.dev/versions/latest/sdk/webbrowser/#webbrowseropenauthsessionasyncurl-redirecturl-options)

Expo Browser Doc
