


## 使用Nextjs@15快速构建AI助理机器人

[UI截图](doc/image.png)
![UI截图2](doc/image1.png)

> 这是一个简单的案例利用`copilotkit`来构建一个AI助理机器人，主要是为了体验一下Nextjs@15的turpopack的速度。

```bash
└─app
    │  CopilotConfig.tsx            // 配置文件
    │  CopilotKitProvider.tsx       // ChatProvider
    │  layout.tsx                   // 布局文件
    │  page.tsx                     // 页面文件 
    │
    ├─api
    │  └─copilotkit
    │          route.ts             // CopilotKit Backend Runtime
```

比较方便的是可以快速实现一个自定义的Action，以及自定义的Chat UI。