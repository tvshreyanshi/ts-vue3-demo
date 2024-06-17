<template>
    <div>
      <div class="container-sm">
        <h6>Register</h6>
        <div>
          <form @submit.prevent="submitForm()">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">@</span>
              <input
                type="text"
                class="form-control"
                v-model="firstName"
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
                v-model="lastName"
                placeholder="LastName"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon2">@</span>
              <input
                type="text"
                class="form-control"
                v-model="email"
                placeholder="Email"
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
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon2">@</span>
              <input
                type="text"
                class="form-control"
                v-model="confirmPassword"
                placeholder="Confirm Password"
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
  const firstName = ref("");
  const lastName = ref("");
  const email = ref("");
  const password = ref("");
  const confirmPassword = ref("");
  const submitForm = () => {
    if (firstName.value != "" && lastName.value != "") {
      console.log("userName", firstName.value);
      console.log("Password", password.value);
    }
  };
  </script>