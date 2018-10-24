import { mount, createLocalVue } from "@vue/test-utils";
import Vuelidate from "vuelidate";
import LoginForm from "@/components/login-form";

const localVue = createLocalVue();
localVue.use(Vuelidate);

describe("login form", () => {
  it("should mark inputs as invalid", () => {
    const wrapper = mount(LoginForm, { localVue });
    wrapper.find("button").trigger("click");

    expect(wrapper.find("#username").classes()).toContain("is-invalid");
    expect(wrapper.find("#password").classes()).toContain("is-invalid");
  });
});
