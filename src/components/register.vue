<script setup>

import { ref } from 'vue';
import { useUserStore } from "@/stores/user";
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const userName = ref(''); 

const userStore = useUserStore();

const router = useRouter();

async function signUp () {
  await userStore.signUp(email.value, password.value, userName.value);

  if (userStore.user && userStore.user.role === 'authenticated') {
     router.push('/logIn');
  }
};

</script>

<template>
  <div class="container-fluid container-principal d-flex justify-content-center mt-5">

    <div class="btn-group" role="group" aria-label="Basic example">
        <a href="/register" type="button" class="btn btn-primary"> Register</a>
        <a href="/logIn" type="button" class="btn btn-primary">Log In</a>
    </div>
    <div class="card mb-3 " style="max-width: 640px;">
    <div class="row g-0">
      <div class="col-md-4 col-left position-relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" fill="currentColor" class="bi bi-triangle-half position-absolute top-50 start-50 translate-middle img-fluid rounded-start" viewBox="0 0 16 16">
          <path d="M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017.162.162 0 0 0 .054-.06.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>
        </svg>
      </div>
      <div class="col-md-8 col-right">
        <div class="card-body">
          <h1 class="card-title">Register</h1>
          <form class="form-signin" @submit.prevent="signUp">
            <div class="mb-3">
              <label for="inputText1" class="form-signin-label">Enter Name</label>
              <input v-model="userName" type="text" class="form-control " id="inputText1" placeholder="Your full name" required autofocus>
            </div>
          
            <div class="mb-3">
              <label for="inputEmail1" class="form-signin-label">Email address</label>
              <input v-model="email" type="email" class="form-control" id="inputEmail1" placeholder="Email Addres" required autofocus>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div class="mb-3">
              <label for="inputPassword" class="form-signin-label">Password</label>
              <input v-model="password" type="password" class="form-control" id="inputPassword" placeholder="********" required>
              <div id="PasswordHelp" class="form-text">Your password must be 8-20 characters long, contain letters and numbers, and must not
              contain spaces, special characters, or emoji.</div>
            </div>
              
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Remember me </label>
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-block">Create Account</button>
          </form>
        </div>
       </div>
      </div>
    </div>
  </div>
</template>
  
<style scoped>

.container-principal{
  background-color: #224156;
}

h1{
  color: #224156;
  text-align: center;
}

.col-left{
  background-color: #224156;
}
.col-right{
  background-color: #65b8a6;
}



svg{ 
    color: #65b8a6;
}



</style>