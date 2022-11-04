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
  <div class="container-fluid d-flex justify-content-center mt-5 mb-5">
    <div class="w-75">
      <div class="card mb-3 w-100" style="max-width: 540px;">
        <div class="row">
          <div class="col-4 col-left position-relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="150" fill="currentColor" class="bi bi-triangle-half position-absolute top-50 start-50 translate-middle" viewBox="0 0 16 16">
              <path d="M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017.162.162 0 0 0 .054-.06.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>
            </svg>
          </div>
          <div class="col-8 col-right">
            <div class="card-body">
              <h1 class="card-title display-4">Register</h1>
              <form class="form-signin" @submit.prevent="signUp">
                <div class="mb-3">
                  <label for="inputText1" class="form-signin-label mt-3 mb-2 text-light">Enter Name</label>
                  <input v-model="userName" type="text" class="form-control " id="inputText1" placeholder="Your full name" required autofocus>
                </div>
              
                <div class="mb-3">
                  <label for="inputEmail1" class="form-signin-label mb-2 text-light">Email address</label>
                  <input v-model="email" type="email" class="form-control" id="inputEmail1" placeholder="Email Addres" required autofocus>
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div class="mb-3">
                  <label for="inputPassword" class="form-signin-label mb-2 text-light">Password</label>
                  <input v-model="password" type="password" class="form-control" id="inputPassword" placeholder="********" required>
                  <div id="PasswordHelp" class="form-text">Your password must be 8-20 characters long, contain letters and numbers, and must not
                  contain spaces, special characters, or emoji.</div>
                </div>
              
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input text-bg-light" id="exampleCheck1">
                  <label class="form-check-label text-light" for="exampleCheck1">Remember me </label>
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-principal btn-block">Create Account</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>
  
<style scoped>

h1{
  color: #65b8a6;
  text-align: center;
}

.btn-principal:hover{
  background-color: #65b8a6;;
}

.col-left{
  background-color: #65b8a6;
}
.col-right{
  background-color: #224156;
}

svg{ 
    color: #224156;
}

.form-control{
   background-color:honeydew;
}

.form-control:hover{
  background-color: #baebe1;
}

</style>