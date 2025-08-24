# 网站介绍

## **网站建立背景**

在这个快节奏的时代，无论是因为各种移动通讯技术的普及导致移动端用户无时无刻都可以接收到各种各样的信息；还是由于令人眼花缭乱的社交平台总是占领着人们的碎片化，乃至闲暇的时间；身处于这个时代，越来越少的人有时间和能力可以静下心，在一个长期不被打扰的时段拿起一本书，专心地进行阅读和领悟。

因此，本站点基于这个现象，旨在通过以书为单位，并对书中的每个章节分别设立精炼概括、引言、好句分享等方式，最大程度地使访问网站的用户，在碎片化的时间内能够阅读和体会到一些经典书籍中的精髓；从而将互联网时代给传统化的阅读形式所带来的冲击，转化为一种新型、正面和有效的改革。

![](attachment:8fb98280-7926-4417-927c-02d0057534c3:image1.png)

## **网站页面组成**

### **主页（Home Page / index.html）**

**【每日引言】 DAILY QUOTE**

![](attachment:c8c4e62f-a0b1-4c99-98c2-26704b40e602:image2.png)

每当用户访问或刷新主页面时，在【每日引言】栏目中会展示出一句引言。该引言来自于收录在本站点中某一本书籍，某一章节浓缩提取内容的【引言】栏目。引言后附带【阅读】链接中，含有该引言是来自于哪一本书的哪一个章节的信息。用户可以通过点击该链接，来跳转至该文章所处于的页面。

该【每日引言】栏目设置于主页较为显著的位置，目的是为了通过含有思考价值的引言来吸引用户进一步阅读的兴趣。随机生成引言的目的，也是为了能在用户每次访问该网站时，都能保持一种新鲜感，以及探索性的心态。

**【书单】 BOOK LIST**

![](attachment:2a1032d0-7d26-4a64-9c49-4a1896fc7b74:image3.png)

该【书单】栏目的作用类似于导航栏，显示了收录于本站点所有书籍的浓缩提取。通过对书名进行点击，可以跳转至该书的第一章浓缩提取内容页面。

**【站点指南】 WEBSITE GUIDE**

![](attachment:933ac589-e168-4577-bfe1-dcf33939a1c0:image4.png)

本站点的布局是十分用户友好的。尽管如此，我还是为用户提供了【站点指南】；该栏目主要是为本站点的新用户进行服务，通过对本站各个页面中的内容做简要介绍，来为用户提供清晰的站点指南。

用户可以通过点击标题，来跳转至站点的相关栏目。

### **关于本站（About Page / about.html）**

![](attachment:f2bba2cf-36fc-4520-9870-b13db93d2c24:image5.png)

在【关于本站】的界面中，为用户提供了该站点建立的背景和我的初衷信息，目的是为了使用户对本站有着更加深刻的理解。

### **联系我们（Contact Page / contact.html）**

**【联系地址】 OUR LOCATION**

![](attachment:91a951f0-7482-4e94-b554-3f5b8621360c:image6.png)

在【联系地址】栏目中提供了我的联系地址以及联系方式。若用户对于本站的使用过程有问题，可以随时进行联系。

**【联系表单】 CONTACT FORM**

![](attachment:0f32f8bb-c92c-46eb-9030-d12bdf996a4c:image7.png)

在【联系表单】栏目中，用户可以通过在填写姓名和邮箱之后，填写对于本站的改进反馈。我在接收到用户发送的信息之后，可以通过用户填写的个人邮箱地址，告知用户网站最新的更新。

### **详细文章**

**【浓缩提取】**

![](attachment:ef5abd93-9444-4132-8883-3e69539d73ce:image8.png)

各个章节中的【浓缩提取】部分组成了整个站点最核心的内容。该栏目可包含三个部分：书名、章节标题、概括、引言、摘抄。其中，【书名】、【章节标题】和【概括】的栏目是每个章节里一定含有的；而【引言】和【摘抄】的部分则视不同的文章而决定。

**【记笔记】 Take Some Notes**

![](attachment:99da27fd-17d7-4215-a7b8-a78125bd27d1:image9.png)

在【记笔记】的栏目中，用户可以通过在输入框中写下在阅读该篇浓缩提取后，产生的一些感悟，并点击【发布】按钮进行发布；若想要清空输入框，可点击【重置】按钮。

**【我的笔记】My Notes**

![](attachment:69c365d0-226e-4dea-9fc6-06b047636346:image10.png)

【我的笔记】栏目中显示了用户曾经发布过的读书笔记的历史记录；通过点击【编辑】和【删除】按钮，可以对笔记进行编辑和删除。

**【导航&翻页】**

![](attachment:5ceb2d9f-7e64-4bf9-9aa3-51d3d7292088:image11.png)

在文章底部的【导航&翻页】区域，用户既可以通过点击【上一篇】或者【下一篇】的链接来查看其相应的页面，也可以通过在输入框中输入想要访问的章节编号来访问相应的页面。

# 技术总结

## **HTML**

### **基本语义结构**

在浓缩提取网站的页面中，基本语义结构的定义是必不可少的，无论是在主页，还是在各种详细章节页面中都含有这样的结构，就不在此一一罗列。

因此，我选中了主页中页眉、主体、页脚部分，作为例子，来阐述各种标记的应用。

**【元标记】**

```html
<meta charset="UTF-8" />
<!-- 声明了页面UTF-8的字符编码 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- 将视口宽度设置为与设备屏幕宽度匹配，防止在小屏幕上出现水平滚动。 -->
<!-- 将初始缩放比例设置为 1.0，意味着内容以原始大小显示，不会放大或缩小。 -->
<title>Essence Extract</title>
<!-- 声明了标签页的标题 -->
```

**【容器类标记】【二维类标记】【基本文档标记】**

```html
<header class="header">
     
  <h1 class="header__h1">Essence Extract</h1>
     
  <nav class="header__nav">
           
    <ul class="header__ul">
                 
      <li class="header__li">
                        <a href="#">Home</a>            
      </li>
                 
      <li class="header__li">
                        <a href="pages/about.html">About</a>            
      </li>
                 
      <li class="header__li">
                        <a href="pages/contact.html">Contact</a>            
      </li>
             
    </ul>
       
  </nav>
</header>
```

**【需要转义处理的相关标记】**

```html
<p class="guide__p">
    <pre>Randomly generated quote from one of the chapters in the books  will be displayed here each time the page refreshes.
    Click on the link after the quote to check out where it comes from.</pre>
</p>
```

### **多媒体**

```html
<figure class="hero__figure">
     
  <img
    src="img/transparent_purple_open_book_685x485.png"
    alt="Get Started!"
    title="Get Started!"
    width="685"
    height="485"
  />
</figure>
<!-- 对本地资源中的图片资源进行了访问 -->
<!-- 定义了图片的宽度和高度，以及图片的名称和fallback的文本内容 -->
```

### **表单控件**

```html
<p class="post">
      <label class="post__label" for="email">Email:</label>    
  <input
    class="post__input"
    type="email"
    name="email"
    id="email"
    placeholder="your email"
    autocomplete="off"
    required
  />
</p>
<p class="post">
      <label class="post__label" for="message">Your Message:</label>    
  <textarea
    class="post__textarea"
    name="message"
    id="message"
    cols="30"
    rows="10"
    placeholder="Type your message here"
  ></textarea>
</p>
<!-- 用户通过使用<input>和<textarea>等表单控件来进行单、多行输入 -->
```

## **CSS**

### **基本排版**

**【字体声明】**

先通过@font-face来从本地字体文件夹中引入字体文件，并将其命名；

随后在：root{}中定义字体变量，并设置其相应的fallback安全字体。

```css
@font-face{
		font-family: "Nunito";
		src: url("../fonts/Nunito-VariableFont_wght.ttf");
}

@font-face{
		font-family: "permanent marker";
		src: url("../fonts/PermanentMarker-Regular.ttf");
}

/* FONTS */
- -FF: "Nunito", sans-serif;
- -FF-HEADINGS: "permanent marker", cursive;
```

**【字体单位的合理使用】**

通过clamp()函数，以变量的形式来设置字体的最小值和最大值，并且采用rem而不是px为单位，从而保证用户在不同设备上更加舒适的响应式体验。通过测试之后，选定2.2vh作为较好视觉效果的默认字体大小值。

```css
-fs: clamp(1rem, 2.2vh, 1.5rem);
```

**【基于normalize.css的基本样式扩展】**

对页面的布局采用了两边留白（填充颜色），中间为内容栏目的方式，给用户带来更加舒适的阅读体验。相较于normalize.css的基本样式，本站的CSS文件采用了以变量定义颜色、尺寸、样式等方式，来达到页面的一致性。同时，在CSS文件中对所有元素的内边距和外边距重置为0，以便后续定义边距能在0的基础上修改，使其更加统一。

```css
body {
  background-color: var(--BODY-BGCOLOR);
  color: var(--FONT-COLOR);
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  border-left: var(--BORDERS);
  border-right: var(--BORDERS);
  box-shadow: 0 0 10px var(--BORDER-COLOR);
}
```

### **定位**

**【绝对定位】**

对于页眉部分，我在CSS中采用了绝对定位的方式，将其固定于页面的顶端。

```css
.hero__h2 {
  position: absolute;
}
```

**【粘性定位】**

对于页脚部分，则是采用了粘性定位的方式；这样一来，无论用户将页面滚动到哪个位置，页脚都能正常显示。

```css
.header {
  position: sticky;
  top: 0;
  z-index: 1;
}
```

**【相对定位】**

对于图片的定位，采用了相对于页眉位置的相对定位形式。

```css
.hero {
  position: relative;
}
```

### **布局**

**【弹性布局】**

对于章节详情页面中的翻页控件，使用弹性布局将上一页链接、精确定位页面输入框、下一页链接的元素来放置。同时，通过在控件之间添加空白，来实现三个控件平均分布显示的效果。

```css
.aside {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
}
```

**【块状布局】**

对于主页部分书单区域中，各本书名的选项采用了块状显示的布局，同时结合a:hover时改变标题的背景颜色和字体颜色的方式，来实现当鼠标悬浮在选项条上时，能将整条水平区域都填满的效果。

```css
.bookTitle__a {
  text-decoration: none;
  display: block;
  border-radius: var(--BORDER-RADIUS-L);
}

.bookTitle__a:hover {
  background-color: var(--BORDER-COLOR);
  color: var(--HEADER-COLOR);
}
```

### **响应式设计**

**【移动优先设计原则】**

在对页面<body>和<main>设计时，首先考虑了手机屏幕较窄且长的特性，比较适合将内容铺满屏幕。因此，在对元素高度和宽度进行定义时，优先考虑了手机移动端的视图效果。

**【media query的使用】**

在对于各界面欢迎动画进行设计的时候，考虑到移动端的设备屏幕不利于展示为PC端所设计的动画，所以使用了media query的技术来为两种设备做适配。

**【breakpoint】**

对于移动端和PC端之间的断点，考虑到大多数移动设备的屏幕宽度，于是将断点设置为当最小宽C大于576px时，将其判定为非移动端屏幕，并展示相应的内容（具体技术在拓展技术中提及）。

```css
@media screen and (min-width: 576px) {...}
```

## **JavaScript**

### **【我的笔记】 My Notes**

在本站的章节详情页面中的【我的笔记】部分，通过结合DOM API，实现用户个人笔记历史记录的动态增删改功能。

![](attachment:69c365d0-226e-4dea-9fc6-06b047636346:image10.png)

对于笔记的发布：首先，对发布笔记的按钮添加了一个事件聆听函数。如果发布的笔记是有效的（非空白），函数会先定义一个笔记的对象。这个对象的属性，包括了：删除无效空格和换行符后的笔记文本内容、笔记更新时间、评论的编号、当前章节页面的编号，并将笔记对象的信息格式化为JSON文本，保存在本地存储中。

```jsx
if (commentText.value) {
  let timeObj = getTimeObj();
  let commentObj = {
    text: commentText.value.trim(),
    updateTime: timeStringify(timeObj),
    commentID: generateCommentID(timeObj),
    pageID: getPageNum(),
  };
  localStorage.setItem(`${commentObj.commentID}`, JSON.stringify(commentObj));
}
```

需要阐明的是，笔记对象中定义的是更新时间，而不是初始创建时间的原因，是由于在【我的笔记】区块含有编辑历史笔记的功能；因此，在编辑笔记之后，其在本地存储中对象的更新时间属性也会相应的产生变化。

然而，笔记的编号在其被创建之后，是保持固定不变的。通过generateCommentID(timeObj)函数，来将笔记创建的时间转换为固定格式的数字串，并将其作为该评论的编号来使用。

```jsx
const generateCommentID = (timeObj) => {
  return `${timeObj.year}${timeObj.month}${timeObj.date}${timeObj.hours}${timeObj.minutes}${timeObj.seconds}`;
};
```

而为笔记定义一个pageID的属性，则是为了主页的【随机生成引言】功能而服务，后文会提及；其中，pageID通过调用getPageNum()函数来实现。

```jsx
const getPageNum = () => {
  const currentArticle = document.getElementsByClassName("main__article")[0];
  const currentPageNum = Number(currentArticle.id);
  return currentPageNum;
};
```

在生成笔记对象并将其进行存储之后，通过调用DOM API，动态新建笔记元素。除了笔记的文本内容之外，还加入一个按钮容器，来放置【编辑】和【删除】按钮。

```jsx
const commentItem = document.createElement("li");
const buttonBox = document.createElement("div");
buttonBox.className = "buttonBox";
addCommentItem(commentItem, commentObj);
commentText.value = "";
commentItem.appendChild(buttonBox);
commentList.appendChild(commentItem);
```

在有了笔记元素内容和按钮容器的基础上，为笔记元素加入【编辑】按钮

```jsx
const editButton = document.createElement("button");
addEditButton(editButton, commentObj);
```

在添加【编辑】按钮成功之后，对其添加点击聆听函数。首先获取当前的时间戳，将其转化为字符之后更新该笔记的更新时间属性，同时将有效编辑后的文本赋予为该笔记对象的最新文本内容。如果编辑后的文本为空白，则提醒用户重新输入。最后，在按钮容器中加入【编辑】按钮。

```jsx
editButton.onclick = () => {
  const editedComment = prompt("Edit Comment");
  if (editedComment) {
    timeObj = getTimeObj();
    commentObj.updateTime = timeStringify(timeObj);
    commentObj.text = editedComment.trim();
    localStorage.setItem(`${commentObj.commentID}`, JSON.stringify(commentObj));
    editButton.parentNode.parentNode.innerHTML =
      commentObj.updateTime + " " + commentObj.text;
    const buttonBox = document.createElement("div");
    commentItem.appendChild(buttonBox);
    buttonBox.appendChild(editButton);
  } else if (editedComment === "") {
    alert("Please enter text!");
  }
};
buttonBox.appendChild(editButton);
```

添加完【编辑】按钮之后，最后初始化【删除】按钮的点击事件。当用户按下【删除】按钮之后，首先程序先通过该笔记对象的ID来找到其在本地存储中的位置，并进行删除。随后，将该笔记元素的双亲节点从页面中移除，将输入框中的文本置空，最后将【删除】按钮添加至按钮容器中。

```jsx
const deleteButton = document.createElement("button")
	          addDeleteButton(deleteButton, commentObj);
            deleteButton.onclick = () => {
                localStorage.removeItem(`${commentObj.commentID}`);
                deleteButton.parentNode.parentNode.remove();
                commentText.value = "";
            }
            buttonBox.appendChild(deleteButton);
        } else {
            alert("Please enter text!");
        }
    }
};
```

对于在用户进入章节详情页面时，页面执行的【我的笔记】历史记录初始化的函数，与【发布笔记】函数的执行逻辑大致相同。其中，唯一的差异就是笔记初始化函数是通过对本地存储中的数据进行遍历之后，得到笔记对象的一系列属性值，然后通过相同的DOM API方式，将相应的元素添加至页面中。

```jsx
for (let key in localStorage) {
		const commentItem = document.createElement("li");
		const buttonBox = document.createElement("div");
		buttonBox.className = "buttonBox";
		let commentObj = JSON.parse(localStorage.getItem(key));
```

### **页面导航**

对于页面底部的翻页模块，本项目中也使用了通过DOM API动态修改链接的属性值，来达到翻页的效果。

![](attachment:5ceb2d9f-7e64-4bf9-9aa3-51d3d7292088:image11.png)

首先，定义一个可以获取当前页面编号的getPageNum() 函数。实现原理就是通过获取文章ID的方式来返回当前所在页面的ID。

```jsx
const getPageNum = () => {
  const currentArticle = document.getElementsByClassName("main__article")[0];
  const currentPageNum = Number(currentArticle.id);
  return currentPageNum;
};
```

随后，通过getPageNum() 所获得的当前页面ID，来动态设置返回上一篇和前往下一篇文章的链接。并且判断是否当前页面是第一篇或是最后一篇文章。

```jsx
const setPageLink = (firstPageNum, lastPageNum) => {
  const currentPageNum = getPageNum();
  const previousLink = document.getElementsByClassName("previous__a")[0];
  const nextLink = document.getElementsByClassName("next__a")[0];
  if (currentPageNum === firstPageNum) {
    nextLink.setAttribute("href", `${currentPageNum + 1}.html`);
  } else if (currentPageNum === lastPageNum) {
    previousLink.setAttribute("href", `${currentPageNum - 1}.html`);
  } else {
    previousLink.setAttribute("href", `${currentPageNum - 1}.html`);
    nextLink.setAttribute("href", `${currentPageNum + 1}.html`);
  }
};
```

需要阐明的是，链接的元素在HTML文件中已经预先定义过。因此，当在JavaScript文件中只需对其的属性值进行修改。

```html
<aside class="aside">
  <a href="" class="aside__a previous__a">Previous</a>
  <form class="pageForm" id="pageForm">
    <input
      class="pageNum"
      id="pageNum"
      type="text"
      placeholder="enter chapter number"
      autocomplete="off"
    />
  </form>
  <a href="" class="aside__a next__a">Next</a>
</aside>
```

最后，设置精确定位页面的输入框。当函数判断用户的输入落在有效的页面范围之内后，程序将根据用户的输入重置页面URL，实现翻页。

```jsx
const pageRedirect = (firstPageNum, lastPageNum) => {
  const pageForm = document.getElementById("pageForm");
  pageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("pageNum");
    const newPageNum = Number(input.value);
    if (newPageNum >= firstPageNum && newPageNum <= lastPageNum) {
      const newPageUrl = `${newPageNum}.html`;
      location.href = newPageUrl;
    } else {
      alert("invalid input!");
      location.reload();
    }
  });
};
```

### **【每日引言】 Daily Quote**

在前文有提到过，站点的主页上，有一个【每日引言】的模块。其工作原理主要是使用异步编程，通过获取其它页面的信息之后，在本页面展示出来。

![](attachment:c8c4e62f-a0b1-4c99-98c2-26704b40e602:image2.png)

首先，定义了一个【引言】类。在这个类中，通过输入三个参数之后，使用一个构造函数来设置引言的文本信息、作者、章节号。

```jsx
class quote {
  constructor(text, author, chapter) {
    this.text = text;
    this.author = author;
    this.chapter = chapter;
  }
}
```

定义一个能够随机生成URL的函数。通过接受一个【最后一章章节号】的参数，来确定生成随机数的范围。在获得当前URL的前缀后，通过字符串拼接的方式返回一个随机的URL。

```jsx
const generateRandomUrl = (lastPageNum) => {
  const randomNumber = Math.floor(Math.random() * lastPageNum + 1);
  const urlPath = location.href;
  const urlRoot = getUrlRoot(urlPath);
  const randomUrl = urlRoot + `Francis_Bacon/${randomNumber}.html`;
  console.log(randomUrl);
  return randomUrl;
};
```

通过函数生成的随机URL，可以异步访问到该URL下的文章，并获取该文章浓缩提取中的【引言】栏目。维护一个计数器，来计算同名元素的个数，并以此确定一个随机数的范围，来在有效的引言中随机选择一个引言，将其实例化为【引言】类下的一个对象并返回。如果在该文章中，并没有相应的【引言】栏目，则另作处理。

```jsx
const requestQuote = async (url) => {
  const response = await fetch(url);
  const parser = new DOMParser();
  const doc = parser.parseFromString(await response.text(), "text/html");
  const quoteCount = doc.getElementsByClassName("quote").length;
  const randomNumber = Math.floor(Math.random() * quoteCount);
  const randomQuote = doc.getElementsByClassName("quote")[randomNumber];
  if (quoteCount > 0) {
    const quoteHTML = randomQuote.innerText;
    const quoteText = quoteHTML.slice(
      quoteHTML.indexOf('"') + 1,
      quoteHTML.lastIndexOf('"')
    );
    const quoteAuthor = randomQuote.getElementsByTagName("span")[0].innerText;
    const quotePage = url.slice(url.lastIndexOf("/") + 1, url.indexOf(".html"));
    const quoteObj = new quote(quoteText, quoteAuthor, quotePage);
    return quoteObj;
  }
};
```

在异步获取了引言之后，将引言对象和之前随机生成的URL以参数传入【显示每日引言】的函数中。由于在定义【引言】类的时候，是将引言的文本内容和其作者分开定义的。因此，可以通过获取引言对象的作者，和引言进行分开显示。同时，在【显示每日引言】函数中，通过先前生成的随机URL参数，动态设置一个前往该页查看详情的链接。

如果函数接受的引言是空值，则代表该篇文章中没有【引言】栏目，程序则接收这个错误，并以一个缺省值作为【每日引言】的内容。

```jsx
const displayQuote = (quoteObj, randomUrl) => {
  const quoteText = document.getElementsByClassName("dailyQuote__p")[0];
  const quoteAuthor = document.getElementsByClassName("dailyQuote__author")[0];
  try {
    quoteText.innerHTML = quoteObj.text;
    quoteAuthor.innerHTML = "&gt; " + quoteObj.author;
    const quoteChapter = document.createElement("a");
    addQuoteChapter(quoteChapter, quoteObj.chapter, randomUrl);
    quoteText.appendChild(quoteChapter);
  } catch (error) {
    quoteText.innerHTML = "Enjoy your day!";
    quoteAuthor.innerHTML = "&gt; " + "Kyle Huang";
  }
};
```

## **拓展技术**

### **CSS渐变、转换、动画**

**【渐变】**

设置两个颜色常量（浅蓝色和深蓝色），并将其作为线性渐变函数的参数，定义一个渐变方向为由上至下的背景图常量。

```css
--BGCOLOR-FADE: #b2cdf1;
--BGCOLOR: #3670dd;
--BGIMAGE: linear-gradient(to bottom, var(--BGCOLOR), var(--BGCOLOR-FADE));
```

将背景图常量作为html页面的背景属性

```css
html {
  background-image: var(--BGIMAGE);
}
```

**【转换】【动画】**

在本站页面中，CSS的【转换】和【动画】技术，作为【欢迎动画】结合使用。其中，【动画】的参数设置为总时长为半秒，动画曲线采用ease-in-out，并在动画完成后，保持动画结束的状态。

```css
animation: showWelcome 0.5s ease-in-out 0.5s forwards;
```

![](attachment:3b25e77e-9e68-4d43-976b-68cfeb8205e4:image12.png)

对于【动画】，通过不断测试，得出将关键帧分别设置在整个动画时长的0%、50%和100%时间点较为合适。

【动画】中结合了【转换】技术。即一开始，带有背景颜色的文本框是通过将位置参数设置成负数，而隐藏起来；与此同时，将文本框拉伸成平行四边形，并将其尺度调成最小。

在动画的50%处，位置参数设置成了正值，从而达到下拉的效果；同时，将文本框形状再拉伸，达到一种较为扁平的效果；并将文本框的大小放大到原本的1.2倍。

最后，在动画的100%处，位置偏移参数比动画在50%的位置向上平移了一定距离，并且将文本框的大小缩小一定比例，从而达到一种反弹的动画效果；使用X轴方向的平移，则是为了将文本框保持在原来的位置，保持美观。

```css
@keyframes showWelcome {
  0% {
    top: -20px;
    transform: skew(0deg, -5deg) scaleY(0);
  }

  50% {
    top: 60px;
    transform: skew(10deg, -10deg) scaleY(1.2);
  }

  100% {
    top: 50px;
    transform: skew(-10deg, -10deg) scale(1.1) translateX(10px);
  }
}
```

### **CSS滚动行为**

通过将滚动行为声明为：平滑，使用户在返回页面顶部时能够有更加流畅的体验。

```css
html {
  scroll-behavior: smooth;
}
```

### **使用GitHub Pages进行公开部署**

https://alchemist212499.github.io/Essence_Extract/index.html

# 课程心得与建议

## **课程心得**

尽管在23年暑假的时候，我有跟着YouTube上Dave Gray的教程学了HTML和部分CSS的相关知识。但是在这学期Web前端的课程上，我还是学到了很多与计算机网络相关的知识；尽管一开始对一些有关协议和架构的知识有些一头雾水，但是在通过课后查阅相关资料之后，我发觉这方面的知识储备对于进一步了解Web的整体知识体系有很大的帮助。毕竟，Web不止停留在HTML、CSS、JavaScript这三大件上，还有很多概念，需要通过学习有关计网的知识后，才能进一步深入理解。不过，在这学期的课程上，对于Web三大件从基础到高级使用的不断强化，为我设计网页打下了夯实的基础。在熟练掌握这三门语言的套路之后，以后无论是学习使用Bootstrap还是Vue这类框架的时候，一定会更加的得心应手。

## **项目心得**

在做Web前端这节课的项目时，由于是第一次做网站，所以一开始对于网站的策划并没有特别的合理。而是在做这个项目的过程中，脑海中慢慢浮现出了一些新的想法，而且老师在课堂上对于项目进度检查提出的建议也是特别有建设性的。例如，有一次老师在课上检查项目的时候，提出了网站主页的部分是十分宝贵的，需要放一些网站的精华内容。通过这句话，我在课下做项目的时候就想到了在主页设置一个【每日引言】的功能。这样能使用户在访问网站主页时，能被富有哲思的引言所吸引，从而萌发出想要进一步探索该站的兴趣；而这也是本站点设立的主旨所在。

在设立这个项目时，我不仅是想要通过Web站点这么一个媒介来分享自己的读书笔记；更是希望能够结合技术，将书籍和文学的魅力，传播给当今处在这个技术化、工业化快时代的人们。

在做项目的过程中，我也更加深刻地领悟到了【内容为主，技术是为内容服务】的含义。由于这学期Web前端课程这个项目的经历，我在平时无论是访问网站，还是使用App的过程中，都能有意识地去将自己代入开发者的角色，来赞赏某些应用合理的布局设计、猜测某一功能底层的逻辑；同时，我也作为一个用户的角色，去反思当自己使用网站或者应用时，希望获得什么样更好的用户体验。因为在很多时候，华丽的布局只会干扰用户的使用体验；而真正近于满分的用户体验，往往来自于一目了然的界面和实用的功能。

总体来说，这次设计网站的项目经历给我带来了很多实战经验，同时也为我未来做更多类似的项目提供了兴趣。

## **课程建议**

由于JS的一些概念较为复杂，如果课程将重点放在详细展开这方面的知识上，感觉对于学生的帮助会更大。
