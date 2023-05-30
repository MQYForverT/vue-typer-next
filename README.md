# vue-typer-next

[![npm](https://img.shields.io/npm/v/vue-typer-next.svg) ![npm](https://img.shields.io/npm/dt/vue-typer-next.svg)](https://www.npmjs.com/package/vue-typer-next)
[![vue3](https://img.shields.io/badge/vue-3.x-brightgreen.svg)](https://cn.vuejs.org/)

Vue3 component that simulates a user typing, selecting, and erasing text.

Checkout the offical project [here](https://github.com/MQYForverT/vue-typer-next).

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Example](#examples)

# Installation

```
npm install --save vue-typer-next
```

## Global import

Install the component:

```vue
import { createApp } from 'vue'
import vueTyperNext}from "vue-typer-next";
import "vue-typer-next/dist/style.css";
import App from './App.vue'

const app = createApp(App)

app.use(vueTyperNext)
app.mount('#app')
```

## Manual import

```vue
<template>
	 <vueTyperNext data="departResultStri1ngs"/>
</template>
<script setup lang="ts">
  import { vueTyperNext } from "vue-typer-next";
  import "vue-typer-next/dist/style.css";
</script>
```

# Usage
To get started simply add the `vue-typer-next` custom element to your `template` and pass the text, which should be typed to the `data` property. In addition you need to pass an element with the class `prefix` or `suffix` to the slot, which will be used as a `wrapper`.

Minimal setup:

```vue
 <vueTyperNext data="departResultStri1ngs"/>
```

## Properties
You can make use of the following properties in order to customize your typing expirience:

| Property             | Type    | Default                                                          | Description                                                           |
|----------------------|---------|----------------------------------------------------------------------|-----------------------------------------------------------------|
| data              | Array/String   |                                                   | The content that needs to be printed can be a string or an array, and the array will automatically add a line break after it |
| handlerNum       | Number  | 1                             | Number of executions, must be greater than 0                                                                |
| typeSpeed            | Number  | 15                                          | type speed in milliseconds                                                               |
| typeSpeedLine           | Number  | 100                            | Line printing speed                                                               |
| cursorChar            | String  | _                                    | character for cursor                                                                |
| back       | Boolean | false                | When the data is an array, will the subsequent values of the data overwrite the previous value                                                                |
| backSpeed              | Number | 30                                                  | Fallback speed                                                                |
| scrollDom            | String  |                               | Scroll container class or id                                                                |


## Events
You can listen to the following events:

| Event                  | Description                                                          | Usage                                                           |
|------------------------|----------------------------------------------------------------------|-----------------------------------------------------------------|
| complete             | All typing is complete                                               | `@complete="doSmth()"` |
| lineComplete         | one line is complete                                        | `@lineComplete="doSmth()"`                                                                |


## Methods
You can listen to the following methods:

| method                  | Description                                                          | parameter                                                           |
|------------------------|----------------------------------------------------------------------|-----------------------------------------------------------------|
| start             | start typer                                               |  |
| pause         | pause typer                                        |                                                               |



## Slots
You can listen to the following slots:

| name                  | Description                                                          |
|------------------------|----------------------------------------------------------------------|
| prefix             | prefix                                               |
| suffix         | suffix                                        |

## Features
None

---

# License

[MIT](http://opensource.org/licenses/MIT)