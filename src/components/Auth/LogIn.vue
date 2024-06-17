<template>
  <div>
    <div class="container">
      <h6>LogIn</h6>
      <div>
        <form @submit.prevent="submitForm()">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input
              type="text"
              class="form-control"
              v-model="userName"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2">@</span>
            <input
              type="text"
              class="form-control"
              v-model="password"
              placeholder="Password"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div>
            <button class="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const userName = ref("");
const password = ref("");
const submitForm = () => {
  if (userName.value != "" && password.value != "") {
    console.log("userName", userName.value);
    console.log("Password", password.value);
  }
};
</script>