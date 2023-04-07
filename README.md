# Message_wall

## 项目描述

- 这是一个前端基于vue3，后端使用nodejs和mysql的练手项目原创开发者为[yike陈](https://space.bilibili.com/485469670)

### 项目目录结构

> * |-- Message_wall
>      *  |-- .gitignore
>      *  |-- directoryList.md
>      *  |-- index.html
>      *  |-- package.json
>      *  |-- README.md
>      *  |-- vite.config.js
>      *  |-- yarn.lock
>      *  |-- .idea
>      *  |   |-- .gitignore
>      *  |   |-- Message_wall.iml
>      *  |   |-- modules.xml
>      *  |   |-- vcs.xml
>      *  |   |-- workspace.xml
>      *  |-- .vscode
>      *  |   |-- extensions.json
>      *  |-- mock
>      *  |-- public
>      *  |   |-- favicon.ico
>      *  |-- src
>          *  |-- App.vue
>          *  |-- main.js
>          *  |-- api
>          *  |-- assets
>          *  |   |-- main.css
>          *  |   |-- fonts
>          *  |   |-- images
>          *  |-- components
>          *  |-- router
>          *  |-- store
>          *  |-- styles
>          *  |-- utils
>          *  |-- view

### 安装插件

- 安装路由插件

  ```bash
  yarn add vue-router@4
  ```

- 安装pinia

  ```bash
  yarn add pinia
  ```

- 安装less

  ```bash
  yarn add less
  ```

- 安装axios

  ```bash
  yarn add axios
  ```

- 如果在vue3中直接使用安装vue拓展axios插件

  ```bash
  yarn add vue-axios
  ```

### 在main.js中引入插件

```vue
import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import {createPinia} from "pinia";
import VueAxios from "vue-axios";
import axios from "axios";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia)
app.use(router);
app.use(VueAxios, axios)

app.mount('#app');
```

### 在vite中引入全局less样式的方法

- 在vite.config.js中添加一下配置

  ```js
  css: {
  		preprocessorOptions: {
  			less: {
  				javascriptEnabled: true,
  				additionalData: `@import "${path.resolve(__dirname, 'src/styles/commons.less')}";`,
  			}
  		}
  	}
  ```

### 引入字体图标

- 使用 [**iconfont**](https://www.iconfont.cn/) 选择自己需要的字体图标引入项目中

### 引入mock模拟数据

```bash
yarn add mockjs
```



