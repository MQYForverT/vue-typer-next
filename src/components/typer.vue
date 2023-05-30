<template>
  <div class="content">
    <slot name="prefix" />
    <div class="result" v-html="result"></div>
    <slot name="suffix" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { typerProps } from "./typer";
import "./style/index.css";

defineOptions({
  name: "vueTyperNext",
});

const props = defineProps(typerProps);

const emit = defineEmits<{ complete: []; lineComplete: [] }>();

const result = ref("");
let handlerNum = 1;
let state = "start";
let timer: number;

const cursorChar2: string = `<span class="cursorChar">${props.cursorChar}</span>`;

watch(
  () => props.data,
  () => {
    console.log('watch')
    handlerNum = props.handlerNum;
    init();
  },{
    immediate:true
  }
);

function initData() {
  result.value = "";
  result.value = result.value + cursorChar2;
}

async function init() {
  if (Array.isArray(props.data)) {
    while (handlerNum > 0) {
      initData();

      await handlerArrayData();
      handlerNum--;
    }
    // 显示完成
    emit("complete");
  } else {
    while (handlerNum > 0) {
      initData();

      await handlerStringData();
      handlerNum--;
    }
    emit("complete");
  }
}

// string的执行逻辑
async function handlerStringData() {
  for (let index = 0; index < props.data.length; index++) {
    const chat = props.data[index];

    result.value =
      result.value.slice(0, result.value.length - cursorChar2.length) +
      chat +
      (index < props.data.length - 1
        ? result.value.slice(result.value.length - cursorChar2.length)
        : "");
    await sleep(props.typeSpeed);
    scrollBottom();
  }
}

// array的执行逻辑
async function handlerArrayData() {
  for (let dataIndex = 0; dataIndex < props.data.length; dataIndex++) {
    const dataChat = props.data[dataIndex] as String;

    if (dataChat) {
      for (let index = 0; index < dataChat.length; index++) {
        const chat = dataChat[index];
        const position = result.value.length - cursorChar2.length;

        result.value =
          result.value.slice(0, position) + chat + result.value.slice(position);

        if (state === "pause") {
          await sleep();
        }

        await sleep(props.typeSpeed);
        scrollBottom();
      }
    }
    // 行完成事件
    emit("lineComplete");
    await sleep(props.typeSpeedLine);

    if (props.back) {
      // 最后一行不回退
      if (dataChat && dataIndex < props.data.length - 1) {
        for (let index = 0; index < dataChat.length; index++) {
          const position = result.value.length - cursorChar2.length;
          result.value =
            result.value.slice(0, position - 1) + result.value.slice(position);
          await sleep(props.backSpeed);
        }
      }
    } else {
      result.value =
        result.value.slice(0, result.value.length - cursorChar2.length) +
        "<br/>" +
        (dataIndex < props.data.length - 1
          ? result.value.slice(result.value.length - cursorChar2.length)
          : "");
    }
  }
}

// 休眠
function sleep(time?: number) {
  return new Promise<void>((resolve) => {
    if (time) {
      setTimeout(resolve, time);
    } else {
      timer = window.setInterval(() => {
        if (state === "start") {
          resolve();
          clearInterval(timer);
        }
      }, 100);
    }
  });
}

function scrollBottom() {
  if (props.scrollDom) {
    const div: Element | null = document.querySelector(props.scrollDom);
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }
}

// 开始
function start() {
  state = "start";
}

// 暂停
function pause() {
  state = "pause";
}

defineExpose({
  start,
  pause,
});
</script>
