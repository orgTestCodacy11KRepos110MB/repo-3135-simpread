> 此功能为 [同步助手 1.1.4 版](Sync) 功能，如低于此版本 [请升级](Sync?id=下载)。

# 描述

将正文转换为语音并播放。

# 使用引擎

与 Edge 内置的大声朗读功能一样，均来自 [Microsoft Azure 的语音服务](https://learn.microsoft.com/zh-cn/azure/cognitive-services/Speech-Service/)。

# 效果

![](https://s1.ax1x.com/2022/12/08/z2PLfe.png)

# 如何使用

> [!TIP]
> 此功能包含两个部分：**插件端** 与 **内置到本地快照**。

## 内置到本地快照

即 [稍后读极速版](稍后读极速版) 功能，打开 http://localhost:7026/unread/ 随便找一个稍后读，打开并进入这个快照。

![](https://s1.ax1x.com/2022/12/08/z2pGZT.png)

然后在页面的正下方就能看到了。

![](https://s1.ax1x.com/2022/12/08/z2k4yj.png)

## 插件端

可以在阅读模式中使用，详细说明 [请看这里](https://github.com/Kenshin/simpread/issues/4834)。

# 设置

同步助手 → 导出 → 朗读

![](https://s1.ax1x.com/2022/12/08/z2pUJJ.png)

# 自定义语音模型

同步助手 → 导出 → 朗读，内置了四种语音模型，如下图所示

![](https://s1.ax1x.com/2022/12/08/z2pFMt.png)

当选择 **自定义** 时，打开 [此链接](https://learn.microsoft.com/zh-cn/azure/cognitive-services/speech-service/language-support?tabs=stt-tts) 通过页面搜索关键字 **中文** 定位到下图

![](https://s1.ax1x.com/2022/12/08/z2pZdS.png)

根据自己的需要，复制灰色框的内容

![](https://s1.ax1x.com/2022/12/08/z2pKRs.png)

并粘贴到同步助手 → 导出 → 朗读，下图所示的位置

![](https://s1.ax1x.com/2022/12/08/z2SxaD.png)

# 保存到本地

在语音播放时，也可将当前的语音同步保存到本地，开启后可保存到导出路径下，当本地快照存在语音文件时，再朗读时，则直接播放当前本地存在的语音。

![](https://s1.ax1x.com/2022/12/08/z2p5OP.png)

同时也支持定制化路径，需要在 [同步助手的增强导出](Sync?id=增强导出) 下设置关键字 `tts` e.g.

![](https://s1.ax1x.com/2022/12/08/z2pTw8.png)

保存的格式为 `.webm` 暂时不支持定制。

# 注意

1. 文字转换语音需要网络支持，虽然使用了流的播放形式，但是如果文字过多或网络问题会出现转换较慢的情况。

2. 虽然不高，但有一定的转换失败率。

  ![](https://s1.ax1x.com/2022/12/08/z2Ct29.png)

# 第三方模块

此方案使用了 [MsEdgeTTS](https://github.com/Migushthe2nd/MsEdgeTTS) 语音模块。