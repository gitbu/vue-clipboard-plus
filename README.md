## 安装

```bash
npm i -S @vue/clipboard-plus
```

## 样例 

### vue2

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://unpkg.com/@vue/clipboard-plus"></script>
</head>
<body>
  <div id="app">
    <template>
      <button @click="handleClick">复制</button>
    </template>
  </div>
</body>
<script>
  Vue.use(vueClipBoard);
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    methods: {
      handleClick() {
        this.$copyText('hello world').then(e => {
          console.log(e);
        })
      }
    },
  })
</script>
</html>
```

### vue3
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://unpkg.com/vue@next"></script>
  <script src="https://unpkg.com/@vue/clipboard-plus"></script>
</head>
<body>
  <div id="app">
    <button @click="handleClick">复制</button>
  </div>
</body>
<script>
  const app = Vue.createApp({
    methods: {
      handleClick() {
        this.$copyText('hello world').then(e => {
          console.log(e);
        })
      }
    },
  });

  app.use(vueClipBoard);

  app.mount('#app');
</script>
</html>
```
