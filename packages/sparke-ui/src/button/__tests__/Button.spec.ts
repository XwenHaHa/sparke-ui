import Button from "../Button";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

// 测试分组
describe("Button", () => {
  // mount
  test("mount @vue/test-utils", () => {
    // @vue/test-utils
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });

    // 断言
    expect(wrapper.text()).toBe("Button");
  });
});

describe("color", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    console.log("类名", wrapper.classes());
    expect(wrapper.classes().map((v) => v.replace("\n", ""))).toBe(true);
  });
});
