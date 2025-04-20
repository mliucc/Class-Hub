> [!TIP]
> 本项目基于[Rin's Hub](https://hub.rinlit.cn)搭建，[点我](https://github.com/RinLit-233-shiroko/Rin-sHub)访问原仓库

<div align="center">
<img src="assets/images/logo.png" alt="图标" width="50%">
<h1Class Hub</h1>
<p>收藏了一些关于高一3班的有趣东西</p>
<p>Some interesting things of my class. </p>

[现在投稿](#如何投稿) | [在线查看](https://mliucc.github.io/Class-Hub/) | [许可证](#许可证)

</div>

<hr>

### 特性
- 拥有类似于 Fluent Design 的优雅、美观的界面；
- 使用瀑布流布局，适合展示大量不规则内容；
- 独特的“Tag”标签功能，可以快速筛选内容；
- 内置的Filter(搜索功能)，可以过滤到感兴趣的内容
- 使用**原生** HTML、CSS 和 JavaScript 编写，没错，原生。

## 如何投稿
如果你想为此投稿，请按照以下步骤：

1. 🍴 Fork 本仓库；
2. 🔍 在 `./updates` 中能看见 `images.json` 文件和 `/images` 文件夹，请在其中添加你的内容；
    
    在 `images.json` 文件中，添加你的内容，格式如下：
    
  ```json
   {
        "tags":{  // 标签
            "test": "cyan",
            "理解": "red"
        },
        
        "tags_colors": [
           "red",
           "yellow",
           "green",
           "cyan",
           "不要更改此处！"
        ],
        
        "hub_items": [  // 内容列表
              {
                "title": "Test",  // 标题
                "image": "blank.png",  // 图片名称，请将您投稿的图片放在 ./updates/images 文件夹中
                "description": "This is a test",  // 描述
                "tags": ["test", "test2"]  // 标签，可以打多个
              }
        ]
    }
  ```
3. 📷 在 `./updates/images` 文件夹中添加你的图片，图片名称请与 `images.json` 文件中的 `image` 字段对应；
4. 🎉 完成！在提交 PR 并通过审核被合并后，你的内容将会出现在网站上。

## 许可证
本插件采用了 MIT 许可证，详情请查看 [LICENSE](LICENSE) 文件。

Copyright © 2025 RinLit, All rights reserved.

## 鸣谢

### 贡献者
感谢这些为Hub贡献的同学:
[![Contributors](http://contrib.nn.ci/api?repo=RinLit-233-shiroko/Rin-sHub)](https://github.com/RinLit-233-shiroko/Rin-sHub/graphs/contributors)

### 使用的资源

- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
