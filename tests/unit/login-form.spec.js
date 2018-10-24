import { mount, createLocalVue } from "@vue/test-utils";
import Vuelidate from "vuelidate";
import LoginForm from "@/components/login-form";

const localVue = createLocalVue();
localVue.use(Vuelidate);

describe("login form", () => {
  it("should mark username and password as invalid", () => {
    const wrapper = mount(LoginForm, { localVue });
    wrapper.find("button").trigger("click");

    expect(wrapper.vm.$v.username.$error).toBe(true);
    expect(wrapper.vm.$v.password.$error).toBe(true);
  });

  it("should mark inputs as invalid", () => {
    const wrapper = mount(LoginForm, { localVue });
    wrapper.find("button").trigger("click");

    expect(wrapper.find("#username").classes()).toContain("is-invalid");
    expect(wrapper.find("#password").classes()).toContain("is-invalid");
  });

  it("should mark inputs as invalid after next tick", () => {
    const wrapper = mount(LoginForm, { localVue });
    wrapper.find("button").trigger("click");

    return localVue.nextTick().then(() => {
      expect(wrapper.find("#username").classes()).toContain("is-invalid");
      expect(wrapper.find("#password").classes()).toContain("is-invalid");
    });
  });

  it("should mark inputs as invalid after forceUpdate", () => {
    const wrapper = mount(LoginForm, { localVue });
    wrapper.find("button").trigger("click");

    wrapper.vm.$forceUpdate();

    expect(wrapper.find("#username").classes()).toContain("is-invalid");
    expect(wrapper.find("#password").classes()).toContain("is-invalid");
  });
});
