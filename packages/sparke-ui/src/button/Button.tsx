import { defineComponent, PropType } from "vue";
import "uno.css";

export type IColor =
  | "white"
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";
export type ISize = "small" | "medium" | "large";

export const props = {
  // 颜色属性
  color: {
    type: String as PropType<IColor>,
    // 设置默认属性
    default: "white",
  },

  // 朴素属性
  plain: Boolean,

  // 大小属性
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },

  // 圆弧属性
  round: Boolean,

  // 图标属性
  icon: {
    type: String,
    default: "",
  },
} as const;

export default defineComponent({
  name: "SButton",
  props, //注册属性
  setup(props, { slots }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
      },
      medium: {
        x: "3",
        y: "2",
        text: "base",
      },
      large: {
        x: "4",
        y: "3",
        text: "lg",
      },
    };
    return () => (
      <button
        class={
          props.color !== "white"
            ? ` 
            py-${size[props.size].y} 
            px-${size[props.size].x} 
            ${props.round ? "rounded-full" : "rounded-sm"} 
            bg-${props.color}-${props.plain ? "100" : "500"} 
            hover:bg-${props.color}-${props.plain ? "500" : "400"} 
            border-${props.color}-${props.plain ? "200" : "500"} 
            cursor-pointer 
            border-solid 
            border 
            text-${props.plain ? props.color + "-500" : "white"} 
            text-${size[props.size].text} 
            hover:text-white 
            hover:border-transparent
            transition duration-300 ease-in-out 
            m-2 
            `
            : `
            py-${size[props.size].y} 
            px-${size[props.size].x} 
            ${props.round ? "rounded-full" : "rounded-sm"} 
            bg-white 
            hover:bg-blue-${props.plain ? "0" : "100"}
            border-gray
            cursor-pointer 
            border-solid 
            border 
            text-gray-600
            text-${size[props.size].text} 
            hover:text-blue 
            hover:border-blue-${props.plain ? "500" : "200"}
            transition duration-300 ease-in-out 
            m-2 
            `
        }
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-2`}></i>
        ) : (
          ""
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
