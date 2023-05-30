<template>
  <div>
    <typer ref="typer2" :data="departResultStrings">
      <template #prefix>
        <button @click="start">开始</button>
        <button @click="pause">暂停</button>
      </template>
    </typer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import typer from "./components/typer.vue";

const departResultStrings = ref("");
const typer2: any = ref(null);

function start() {
  typer2.value.start();
}

function pause() {
  typer2.value.pause();
}

onMounted(() => {
  setTimeout(() => {
    const data = [
      {
        desc: "管理学生数量为0，将交接给新的班主任 ",
        type: "账号资源继承",
      },
      {
        desc: "学生管理：关联班主任自动变为新班主任",
        type: "账号资源继承",
      },
      {
        desc: "IM群: 将新班主任移入原班主任IM群中",
        type: "账号资源继承",
      },
      {
        desc: "督学：关联班主任自动变为新班主任",
        type: "账号资源继承",
      },
      {
        desc: "将移除该用户新后台管理员角色",
        type: "后管权限",
      },
      {
        desc: "将移除该用户产品运营角色",
        type: "后管权限",
      },
      {
        desc: "将移除该用户MCA高级架构师权限",
        type: "课程权限",
      },
      {
        desc: "将移除该用户Python全栈工程师权限",
        type: "课程权限",
      },
    ];

    const result: any = [];
    let type = "";
    data.forEach((x, i) => {
      if (type !== x.type) {
        type = x.type;

        const typeResult = `<span style="display: inline-block;margin-top: ${
          i > 0 ? "15px" : "0px"
        }">【${type}】</span>`;

        result.push(typeResult);
      }

      result.push(`${i + 1}、${x.desc}`);
    });

    departResultStrings.value = result;
  }, 500);
});
</script>

<style scoped></style>
