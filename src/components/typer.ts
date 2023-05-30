import type { ExtractPropTypes } from "vue";

export const typerProps = {
  // 这个是示例值
  // status: {
  //   // PropType：声明时给一个 prop 标注更复杂的类型定义。
  //   type: String as PropType<"on" | "off">,
  //   required: true,
  //   default: "on",
  // },
  // 需要打印的内容，可以为字符串或者数组，数组将自动在后面添加换行符
  data: {
    type: [String, Array],
    default: "",
  },
  // 执行次数，必须大于0
  handlerNum: {
    type: Number,
    default: 1,
    validator(val: number) {
      if (val > 0) {
        return true;
      } else {
        throw Error("handlerNum必须大于0");
      }
    },
  },
  // 打印速度
  typeSpeed: {
    type: Number,
    default: 15,
  },
  // 行打印速度
  typeSpeedLine: {
    type: Number,
    default: 100,
  },
  //光标的符号
  cursorChar: {
    type: String,
    default: "_",
  },
  // 是否撤销显示，当data为数组时，data的后续值是否覆盖前一个值
  back: {
    type: Boolean,
    default: false,
  },
  // 回退速度
  backSpeed: {
    type: Number,
    default: 30,
  },
  // 滚动容器class或者id
  scrollDom: {
    type: String,
    default: "",
  },
};
// ExtractPropTypes:提取属性类型
export type TyperProps = ExtractPropTypes<typeof typerProps>;
