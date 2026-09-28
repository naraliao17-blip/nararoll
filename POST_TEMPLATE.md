---
title: "标题写在这里"
date: 2026-01-01
tags: ["photo", "sri-lanka"]
cover: "/photos/你的图片文件名.jpg"
excerpt: "一句话摘要，显示在列表页，可留空不写这一行"
---

正文写在这里，纯文字段落。

![描述这张图片](/photos/你的图片文件名.jpg)

图片和文字可以按任意顺序穿插，想混排就一段文字一张图，想纯图就多放几张 `![]()`，想纯文字就不写图片、也删掉上面的 `cover` 那一行。

---

使用说明：

1. 复制这份文件，改名为 `年-月-简短英文标题.md`，比如 `2026-09-galle-market.md`
2. 放进 `src/content/posts/` 文件夹
3. 照片放进 `public/photos/` 文件夹，文件名和上面 `cover`、`![]()` 里写的对上
4. `tags` 里想加照片专辑，就一定要包含 `photo` 这个标签（或者只要填了 `cover` 就会自动进作品集，不需要额外打 `photo` 标签，`photo` 标签只是方便你在标签页里单独筛出所有摄影相关的内容）
5. 不想让这篇进 Photography 网格，就加一行 `hideFromPortfolio: true`
6. 提交（commit）后一两分钟网站自动更新
