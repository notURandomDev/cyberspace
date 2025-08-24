# W2G

- 项目净时长：2433min（40.55h），数据来源于Notion Calendar
- 报告撰写净时长：335min（5.6h），数据来源于Notion Calendar

## 选题背景

> App Idea

本次作业旨在开发一个【app+服务器】应用W2G（Where to Go），通过社交媒体 + 点评应用 + 实时定位等模式相结合的方式，来为用户推荐当前所在位置周边的场所（包括娱乐、餐饮、休闲等各种场所）

此app可以有以下应用场景：

- 用户作为游客初来乍到，对周边环境不熟悉，需要一个”本地向导“来提供游玩攻略
- 用户在某区域长期居住，在闲暇时间想要深入探索周边位置

> 名词解释

为了使报告的表述更加简洁，下文将“用户可能感兴趣的地理位置”统一成为POI（Point of Interest）

> 竞品分析

市面上较为流行的点评型app，所提供给用户的信息交互模式，主要是以列表的方式为用户进行推荐。尽管各列表项有相关的缩略信息，但倘若要查看详情信息，还多了一步点击列表项的操作。若用户点击进入详情页之后，发现对其相关信息并不感兴趣，需要返回列表项页面进行继续浏览。

> UX分析

该”查看详情-返回主页“的操作看似代价不高，但是用户不会每次都点击列表项查看详情。在长时间的累计下，用户的`查看详情比`就会逐渐下降，导致某些推荐位置就会被用户忽略；而这些位置，可能又恰恰是用户感兴趣，但是由于列表项所给出的信息不够充分和有说服力，而导致用户与其擦肩而过。

$$
查看详情比 = \frac{浏览详情项}{浏览列表项}
$$

这个问题就让我联想到了社交媒体的沉浸式属性。无论是社交平台还是短视频平台，社区用户发布详情内容能够在第一时间全面而直接地被浏览用户所接收。如果浏览用户对相关内容感兴趣，就会增长其浏览的时间；反之，如果浏览用户对该内容不感兴趣，只需要通过单次的划动操作，就能立即接触到下一条推荐内容的全面信息。

相比于【详情页-列表页】的交互模式，通过划动来切换单项内容的交互模式能够大大减小用户的操作代价，将查看详情比提升至常数`1` 。

> 角色反转

除了交互方式的不同之外，W2G的另一特点是POI商家和用户的角色进行了互换。

详细来说，POI帖子信息的主要贡献者是评价的用户，而非商家在平台上提供的详情信息。通过这种方式，浏览用户能够迅速了解到POI的用户体验与评价，提升了信息真实性的优先级。

这种app的运作模式对于社区生态的优良性依赖较大。帖子的质量是由W2G平台使用用户来维护的。当然在app未来的版本升级中，可以引入的审核机制；这种审核机制的前提是保证帖子真实性。

> UI组成

通过上述分析，我就决定将W2G与用户的交互模式定为【单项内容切换】的方式，以此来弥补此类应用的交互缺陷。

在该应用中，每个POI的“帖子”内容主要包含标题、距离、图片、评论；评论包含用户的头像、用户名、评分和评论内容。

> UX组成

浏览用户除了查看POI帖子内容，还能通过以下方式成为为W2G社区做出贡献的一份子：

- 上传图片，为POI提供图片源
- 发表评论和评分，为W2G社区提供有意义的POI参考来源

## 关键核心代码及解析

### 主页（MainActivity.java）

用户进入主页面之后，app会向用户申请读写手机存储空间的权限。此操作是为了后续上传图片时，跳转到手机系统相册；以及向后端上传图片时，需要读取图片的原文件。

> 获取权限

```java
if (Environment.getExternalStorageState().equals(Environment.MEDIA_MOUNTED)) {
    File sd_path = Environment.getExternalStorageDirectory();
    if (!Environment.isExternalStorageManager()) {
        Intent intent = new Intent(Settings.ACTION_MANAGE_ALL_FILES_ACCESS_PERMISSION);
        startActivity(intent);
    }
}
```

> 获取帖子信息

在`onCreate`函数中，调用帖子数据层类`PostRepository`的方法`fetchPost`来获取帖子数据。

其中，实现了`PostRepository`类的接口`onSuccess` ：当成功获取帖子数据的响应之后，将响应数据中的帖子ID`postID`赋值给当前`MainActivity`中的帖子id`*postRid*`。

随后，将帖子ID以参数的形式传给获取帖子相关评论的函数`fetchComments`。

```java
private void fetchPost() {
    postRepository.fetchPost(postRid, this.longitude, this.latitude, this, carousel, postAddress, postRating, postDistance, new PostRepository.PostCallback() {
        @Override
        public void onSuccess(String postId) {
            Log.d("POST-ID FROM CALLBACK", postId);
            postRid = postId;
            fetchComments(postId);
        }
        @Override
        public void onError(Exception e) {}
    });
}
```

> 获取评论信息

成功获取帖子信息之后，通过调用评论数据层类`CommentRepository`的`fetchComments`方法，进行帖子评论信息的获取。

在写报告的时候，我意识到更加优雅的方式是在后端将帖子和评论数据聚合之后，一同返回给app。

```java
private void fetchComments(String postRid) {
    commentRepository.fetchComments(this, postRid, commentsList);
}
```

> 提交评论

用户点击评论按钮之后，按钮的点击事件监听器会调用评论模态框类`CommentModal`中的`show`方法，使评论模态框对用户可见。

除此之外，在评论模态框类实例化的同时，也实现了类的接口。当用户点击评论模态框中的提交按钮之后，会调用`postComment`函数进行评论请求的发送。

```java
private void showCommentModal() {
    CommentModal commentModal = new CommentModal(this, new CommentModal.CommentSubmissionListener() {
        @Override
        public void onCommentSubmitted(String comment, Float rating) {
            refreshLayout.setRefreshing(true);
            postComment(comment, rating);
        }
    });
    commentModal.show();
}
```

> 发送评论数据请求

在`postComment`函数中，调用了评论数据层类的发送评论函数`sendComment`，进行评论数据请求向后端的发送。

这里没有将发送请求的方法写在`CommentModal`类中的原因，是为了分离视图层和数据层。

```java
private void postComment(String commentText, Float commentRating) {
    refreshLayout.setRefreshing(true);
    commentRepository.sendComment(this, commentText, commentRating, commenter, postRid);
}
```

> 图片上传操作

用户点击上传图片按钮之后，触发`showUploadModal`函数，实例化上传图片模态框类`UploadModal`中的`show`方法。

这里的接口实现省略，主要是调用`Toast`类进行消息的提示操作。

除此之外，`UploadModal`的构造方法中还传入了图片选择器`imagePickerLauncher`和帖子id`*postRid`。\*

```java
private void showUploadModal() {
    uploadModal = new UploadModal(this, new UploadModal.UploadListener() {
        // INTERFACE IMPLEMENTATION
    }, imagePickerLauncher, postRid);
    uploadModal.show();
}
```

> 图片选择器回调

在`UploadModal`类中调用`imagePickerLauncher`的`launch`方法之后，会跳转至系统相册进行图片的选择。

图片选择完成之后，会跳转回W2G的app。`registerForActivityResult`能够对返回的选择结果进行处理。此处的结果处理逻辑是将`UploadModal` 中的图片视图更新为用户在系统相册中所选择的图片。

```java
private final ActivityResultLauncher < Intent > imagePickerLauncher = registerForActivityResult(new ActivityResultContracts.StartActivityForResult(), result - > {
    if (result.getResultCode() == Activity.RESULT_OK && result.getData() != null) {
        Uri imageUri = result.getData().getData();
        if (uploadModal != null) {
            uploadModal.setImageUri(imageUri);
        }
    }
});
```

> 刷新操作

通过下拉界面后松开，用户能够刷新帖子。获取帖子的请求发送之后，后端能够通过用户当前的位置信息，返回给用户系统推荐的POI帖子。

下拉进行刷新的操作使用过`SwipeRefreshLayout`来实现。下拉事件监听器`setOnRefreshListener` 能够设置响应下拉事件的函数。

```java
refreshLayout.setOnRefreshListener(this::handleRefresh);
```

> 响应位置变化

在MainActivity的初始化函数中，对`LocationManager` 参数进行了设置；每当用户移动的范围超过了10m，就会更新一次用户当前的位置。

```java
locationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);
locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 0L, (float) 10, (LocationListener) this);
```

由于MainActivity实现了`LocationListener` 的接口，于是就能对`onLocationChanged`的接口进行重写。每当位置变化，app都会自动刷新帖子，并且改写MainActivity中成员变量经纬度的值。

```java
@Override
public void onLocationChanged(Location location) {
    this.longitude = Double.parseDouble(String.format("%.4f", location.getLongitude()));
    this.latitude = Double.parseDouble(String.format("%.4f", location.getLatitude()));
    Log.d("LOCATION CHANGED", "Latitude:" + this.longitude + ", Longitude:" + this.latitude);
    handleRefresh();
}
```

### 帖子数据层（PostRepository.java）

帖子数据层类主要实现了发送获取帖子数据`GET`请求的方法。其中，处理请求以及更新视图的相关代码已省略。

> 帖子GET请求

在获取到数据响应之后，会在UI线程对视图的数据进行更新，并且调用接口中的回调函数`onSuccess` ，将最新帖子的id传给MainActivity，随后MainActivity通过此id进行评论数据的获取。

```java
functions.createExecution(FUNCTION_ID, "", false, path, ExecutionMethod.GET, new CoroutineCallback < Execution > ((result, error) - > {
    // HANDLE RESPONSE
    // Set adapter on the UI thread
    new Handler(Looper.getMainLooper()).post(() - > {
        // UPDATE ADAPTER
    });
    callback.onSuccess(parsedPost.getId());
}));
```

### 评论模态框（CommentModal.java）

评论模态框类主要定义了模态框的`show`方法、处理提交评论的逻辑。

> 模态框显示

在实例化一个模态框的时候，需要传入MainActivity的`context`。随后，`show` 方法会根据该id实例化一个`AlertDialog` ，使其在MainActivity中显示。

```java
AlertDialog dialog = new AlertDialog.Builder(context).setView(modalView).create();
dialog.show();
```

> 提交事件监听器

当用户点击提交评论的按钮之后，会调用接口`CommentSubmissionListener`中的监听函数。传出的评论`comment`和评分`commentRating`将被评论数据层类`CommentRepository`中使用发送评论POST请求。

```java
listener.onCommentSubmitted(comment, commentRating);
```

### 评论数据层（CommentRepository.java）

评论数据层主要实现了评论获取的GET请求、评论发送的POST请求以及接口的定义。

> 评论GET请求

向后端发送GET请求，获取到评论之后，会通过`CommentAdapter`在UI线程更新评论列表的数据。其中，处理评论数据响应的代码已忽略。

```java
functions.createExecution(FUNCTION_ID, "", false, "/comments?post_rid=" + postRid, ExecutionMethod.GET, new CoroutineCallback < Execution > ((result, error) - > {
    // HANDLE RESPONSE
    new Handler(Looper.getMainLooper()).post(() - > {
        CommentAdapter adapter = new CommentAdapter(parsedComments);
        recyclerView.setAdapter(adapter);
    });
}));
```

> 评论POST请求

向后端发送POST请求，新增评论数据。其中，评论的数据来源于评论模态框调用时传入的参数。其中，请求body解析和异常处理部分的代码已省略。

```java
public void sendComment(Context context, String commentText, Float commentRating, String commenter, String postRid) {
    // PARSING REQUEST BODY
    functions.createExecution(FUNCTION_ID, jsonString, false, "/comments", ExecutionMethod.POST, new CoroutineCallback < Execution > ((result, error) - > {
        // ERROR HANDLING
        listener.onCommentSuccess();
    }));
}
```

### 图像上传模态框（UploadModal.java）

图像上传模态框类中主要定义了`show`方法（与评论模态框`show`方法类似，此处不再赘述）、按钮点击事件响应函数、云存储上传以及帖子数据更新PATCH请求的方法。

> 选择图片

在用户点击模态框中选择图片的按钮之后，`handleUpload`函数会将跳转至系统相册的`intent`传给图片选择器`imagePickerLauncher`。

```java
private void handleUpload() {
    Intent intent = new Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
    imagePickerLauncher.launch(intent);
}
```

---

上传图片的操作分为两步

1. 将图片上传到云存储
2. 更新帖子数据库中的图片url数组

> 上传云存储

首先，要通过工具类`RealPathUtil`获取用户所选择图片在移动设备内部存储的真正有效路径（`registerForActivityResult`中获得到result中的Uri并不能直接用于访问手机内部存储）。

工具类`RealPathUtil`来自Github：

[Real Path Utility class for Android, works for all API](https://gist.github.com/tatocaster/32aad15f6e0c50311626)

获取到图片的文件之后，生成一个随机的文件id，使用Appwrite的SDK将图片上传至云存储。

上传成功之后，执行`sendFunctionRequest` 进行数据库中帖子图片更新的请求。

```java
private void sendBucketRequest() {
    // CONFIG
    String path = RealPathUtil.getRealPath(context, selectedImageUri);
    File imageFile = new File(path);
    String fileId = UUID.randomUUID().toString();
    try {
        storage.createFile(BUCKET_ID, fileId, InputFile.Companion.fromFile(imageFile), new CoroutineCallback < io.appwrite.models.File > ((result, error) - > {
            // ERROR HANDLING
            sendFunctionRequest(fileId);
        }));
    } catch (Exception e) {
        // EXCEPTION HANDLING
    }
}
```

> 更新帖子的图片url数组

将该文件在云存储中的文件id通过PATCH部分更新请求发送给后端，进行帖子数据更新的处理。

```java
private void sendFunctionRequest(String fileId) {
    // CONFIG
    // REQUEST PARSING
    try {
        functions.createExecution(FUNCTION_ID, jsonPayload, false, "/post", ExecutionMethod.PATCH, new CoroutineCallback < Execution > ((result, error) - > {
            // ERROR HANDLING
            listener.onUploadSuccess();
        }));
    } catch (Exception e) {
        // EXCEPTION HANDLING
    }
}
```

## 后端服务器

后端采用了Appwrite云函数的架构，使用Node.js环境对前端发送的HTTP请求进行处理，使用的库是Appwrite为Node.js提供的SDK`'node-appwrite'`。

除了应对常规的GET和POST请求之外，后端还提供了基于用户定位的实时帖子推荐算法实现。

后端代码`main.js` 我会附在压缩包当中，这里主要分析以下实时推荐算法的实现。

> 基于用户定位的实时帖子推荐算法

1. 用户从前端传来获取帖子的GET请求，附带的参数是用户定位的经纬度longitude和latitude
2. 将用户传来的位置参数与帖子的经纬度信息一一进行计算，得到以米为单位的距离（此处用到地理位置的计算函数库`'geolib'`）

```jsx
import { getDistance } from "geolib";

function calcDistance(pointA_lat, pointA_lon, pointB_lat, pointB_lon) {
  const distance = getDistance(
    { latitude: Number(pointA_lat), longitude: Number(pointA_lon) },
    { latitude: Number(pointB_lat), longitude: Number(pointB_lon) }
  );

  return distance;
}
```

1. 如果计算出用户位置与该帖子POI之间的距离小于一定值，则将其放入已筛选数组`filteredPosts`中
2. 随机从`filteredPosts` 中挑选一个帖子返回给用户

```jsx
const filteredPosts = posts.documents
  .map((post) => {
    const distance = calcDistance(
      latitude,
      longitude,
      post.latitude,
      post.longitude
    );

    if (distance <= threshold) {
      return { ...post, post_distance: distance };
    }

    return null;
  })
  .filter((post) => post !== null);

const filteredPostsLength = filteredPosts.length;

const randomPostIndex = Math.floor(Math.random() * filteredPostsLength);

return res.json(filteredPosts[randomPostIndex]);
```

## 截图演示

### 首页

> 空白帖子

会显示标题和距离，但是暂未有用户上传图片或发表评论

![post_empty.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/ea171e3e-43da-4b57-8762-aa2d0bfa0a7f/post_empty.png)

> 有内容帖子

显示由用户上传的图片，并且有用户的评论以及评分

![post_fill.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/565c9594-a9d6-4a77-adc5-5c9d84b1fc95/post_fill.png)

> 自适应图片布局

用户能够上传各种比例的图片，帖子在展示的时候能够进行自适应调整

![post_1.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/f9cd927b-ae5e-4b0a-9919-36ccc0ebed32/post_1.png)

![post_2.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/5a63f0d8-d7e9-48fe-93b9-6141dc8b2af4/post_2.png)

![post_3.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/33c8e144-8852-4e8d-b0f2-6f7bac752ae8/post_3.png)

![post_4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/d8de3883-1ae9-4e9d-afe0-e8926a6d9986/post_4.png)

### 评论模态框

> 未填写评论状态

用户能够填写评论和评分

![comment_modal_empty.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/b37c9cdd-1635-4bf6-a79d-ca7910ac6168/comment_modal_empty.png)

> 已填写评论状态

填写完评论和评分后，点击按钮提交

![comment_modal_fill.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/4aeec293-8102-4649-92d4-112609a8aeca/comment_modal_fill.png)

### 图片上传模态框

> 未选择图片状态

图片框展示默认图片

![upload_modal_empty.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/a8e018bb-e5d9-40fe-8f73-6a4a4a260f04/upload_modal_empty.png)

> 跳转相册

点击上传图片按钮后，跳转至系统相册进行选择

![gallery.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/a8ff8056-3676-4fcd-849e-733f50d02825/gallery.png)

> 已选择图片状态

从系统相册选择图片之后，跳转回app，图片框位置显示已选择图片

![upload_modal_fill.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/120bd56a-ca1a-44ba-bfb9-f475c03d33ed/80558fa6-e897-4fac-9ceb-98c44d97fbaa/upload_modal_fill.png)

## 心得体会

W2G的界面并不复杂，我认为这次项目的难点（也是我的收获）在于：

- 发现现有主流评分型应用交互模式的缺陷，结合自己的想法进行改善及实现
- 以安卓原生应用的方式对用户的各种请求逻辑进行处理
- 合理地处理异常
- 熟悉云函数环境的搭建及使用
- 搭建强壮的后端云函数对HTTP请求进行有效的响应
- 进一步深入了解BaaS提供的云存储架构，并将其与app相结合
- 使用接口进行函数的回调（本人主要技术栈为React.js，加深了对Java语言中的接口概念掌握）

### 云函数的使用

在本项目中，我第一次使用BaaS云函数。使用的大致流程就是将Github账号与Appwrite相绑定。在生成云函数的时候，Appwrite会在我的Github账号上新建一个Repo。

接着，我在本地的IDE中Clone该Repo，每次需要更新代码的时候使用Git Commit & Push & Sync。

此方法相较于在本地运行后端服务器的弊端是，每次的Git操作都需要耗时，而且只能在Appwrite中的控制台调出log查看代码的运行情况。

而使用BaaS平台的优点也很明显，就是不用自己从头开始写数据库。通过Appwrite提供的SDK以及方便的图形化数据库管理，能够大大降低后端代码的维护成本。

### 图片的传输与存储

我第一次遇到图片的传输与存储这一问题，是在暑假的软件开发实践中。当时对云存储还不是很了解，加上当时第一次遇到图片的传输与存储，于是当时团队讨论出的解决方法是在前端将图片进行base64编码传到后端。考虑到http请求和响应的payload当中包含大量base64数据，可以看出来这是一种十分不优雅的方式。

在这学期学习React Native的过程中，我深入接触了Appwrite(BaaS)的Storage(Bucket)，对云存储的机制有了深刻的印象；因此，这次开发中面临图片传输与存储的问题，我就决定采用云存储的架构来进行应对。

在实现图片上传至云存储这一功能的时候，我面临着两种选择：

1. 使用POST方法将图片的raw data传到后端，由后端处理云存储的上传
2. 在前端直接将图片上传至云存储

考虑到前后端分离的属性，我首先尝试的方法是将图片原数据传到后端，再由后端进行云存储的上传，随后再将图片的url与相联的帖子数据进行绑定。

但是这种方法的问题是，图片的原数据要传输两次；第一次是从前端传到后端，第二次是从后端传到云上；最后，还要将其返回的url与帖子数据进行绑定。显而易见，这种方法的传输效率较低。

于是，我就对代码进行了重构，采取了第二种解决方案。

### 地理位置信息的处理

在编写根据地理位置推荐帖子的算法时，我一直找不到bug究竟是由什么造成的。最后通过无数遍的git commit和log调试，才发现地理位置的经纬度参数传反了。

### App未来版本升级想法

- 通过任务来获取声誉，声誉大于一定值之后才能成为发布内容的用户，否则只能浏览（参考Stack Overflow）
- 相关POI的营业者可以成为管理人员，对用户提交的内容进行审核
