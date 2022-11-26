# vitepress + github page

## 创建 github 代码仓库

![An image](/image/tools/vitepress/Snipaste_2022-11-26_10-34-02.png)

## 本地运行

> git clone <仓库地址>

![An image](/image/tools/vitepress/Snipaste_2022-11-26_10-36-37.png)

- 1.进入项目根目录,初始化

```
yarn init -y
```

- 2.安装 VitePress

```
yarn add --dev vitepress
```

- 3.创建第一篇文档

```
mkdir docs && echo '# Hello VitePress' > docs/index.md
```

- 4.在 `package.json`添加一些`script`

```
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
}
```

![An image](/image/tools/vitepress/Snipaste_2022-11-26_10-39-50.png)

- 5.运行

```
yarn docs:dev
```

open <a href="http://localhost:5174" target="_blank" rel="noreferrer">http://localhost:5174</a>
![An image](/image/tools/vitepress/Snipaste_2022-11-26_10-40-27.png)

## 创建 workflows

> 根目录创建 `.github/workflows/jekyll-gh-pages.yml`

> `VITEPRESS` 是变量

![An image](/image/tools/vitepress/Snipaste_2022-11-26_10-42-32.png)

```
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: yarn
      - run: yarn install --frozen-lockfile

      - name: Build
        run: yarn docs:build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.VITEPRESS }}
          publish_dir: docs/.vitepress/dist
          # cname: example.com # if wanna deploy to custom domain

```

## 生成 github_token(secrets)

> github 个人主页 Settings Developer settings

填好信息，保存后。会给一串字符，复制，下一步使用。

![An image](/image/tools/vitepress/Snipaste_2022-11-26_10-47-03.png)

> 代码仓库-settings-secret

将刚才的字符填入`Secret`，`Name`是之前提到的`VITEPRESS`,可自定义（输入小写字母，会自动转换大写）

![An image](/image/tools/vitepress/Snipaste_2022-11-26_10-51-52.png)

## 配置 config.js

> 创建`/docs/.vitepress/config.js`

中间填写仓库名称，必须以`/`开始结束

![An image](/image/tools/vitepress/Snipaste_2022-11-26_10-54-06.png)

```js
export default {
  base: "/test-vitepress/",
};
```

## 提交代码

```
git commot -m 'commit'

git push
```

## 查看 actions

可以查看是否部署成功，绿色为成功，红色为失败。可以点进去看报错信息

![An image](/image/tools/vitepress/Snipaste_2022-11-26_10-59-40.png)

## 查看 pages

actions 成功后，进入 settings/pages（最上面有一个地址，可能会延迟出现）点击直接访问，查看是否成功。

![An image](/image/tools/vitepress/Snipaste_2022-11-26_11-00-07.png)

## 代码

- github : <a href="https://github.com/printfCYQ/vitepress-website" target="_blank" rel="noreferrer">github</a>
- blog : <a href="https://printfcyq.github.io/vitepress-website/" target="_blank" rel="noreferrer">blog</a>
