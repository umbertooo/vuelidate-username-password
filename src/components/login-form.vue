<template>
    <div>
        <input name="username" id="username" v-model="username" :class="{ 'is-invalid': $v.username.$error }" />
        <input name="password" id="password" v-model="password" :class="{ 'is-invalid': $v.password.$error }" />
        <button @click="submit">submit</button>
    </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "loginForm",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  validations: {
    username: {
      required
    },
    password: { required }
  },
  methods: {
    submit() {
      this.$v.$touch();
      console.log("form submitted");
    }
  }
};
</script>

<style>
.is-invalid {
  background-color: #ff0000;
}
</style>