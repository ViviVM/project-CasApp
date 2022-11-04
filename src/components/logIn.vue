<script setup>

import { ref } from 'vue';
import { useUserStore } from "@/stores/user";
import router from "@/router";

const email = ref('');
const password = ref('');

const userStore = useUserStore();

async function login() {
  await userStore.login(email.value, password.value);

  if (userStore.user && userStore.user.role === 'authenticated') {
     router.push({path: "/task"});
  }
};

</script>

<template>
   <div class="container-fluid d-flex justify-content-center mt-5" >
      <div class="w-75">
        <div class="card mb-3 w-100" style="max-width: 540px;">
          <div class="row">
            <div class=" col-4 col-left position-relative" >
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="150" fill="currentColor" class="bi bi-triangle-half position-absolute top-50 start-50 translate-middle" style="width: 75%" viewBox="0 0 16 16">
                <path d="M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017.162.162 0 0 0 .054-.06.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>
              </svg>
            </div>
            <div class="col-8 col-right">
              <div class="card-body">
                <h1 class="card-title display-4">Log In</h1>
                <form class="form-signin" @submit.prevent="login">
                  <div class="mb-3">
                    <label for="inputEmail1" class="form-signin-label mt-3 mb-2">Email address</label>
                    <input v-model="email"  type="email" class="form-control" id="inputEmail1" placeholder="Email Addres" required autofocus>
                  </div>
      
                  <div class="mb-3">
                    <label for="inputPassword" class="form-signin-label mb-2">Password</label>
                    <input v-model="password" type="password" class="form-control" id="inputPassword" placeholder="********" required>
                    <div id="PasswordHelp" class="form-text text-black-50 mt-3">
                      <small> Your password must be 8-20 characters long, contain letters and numbers, and must not
                    contain spaces, special characters, or emoji.</small>
                    </div>
                  </div> 
                   
                    
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Remember me </label>
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-block btn-principal justify-content-center mb-3 mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                      <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                    Log In
                </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="w-100 d-flex align-items-center mb-4 mt-4">
          <p class="mt-3 mx-3">Don't have an account?</p>
          <div class="btn-group" role="group" aria-label="Basic example">
            <a href="/register" type="button" class="font-weight-bold text-primary"> Register</a>
          </div>
        </div>
      </div>
      
    </div>
    
</template>
    
<style scoped>

h1{
    color: #224156;
    text-align: center;
}
  
.btn-principal:hover{
  background-color: #224156;
}

.col-left{
  background-color: #224156;
}
.col-right{
  background-color: #65b8a6;
}

.form-control{
   background-color:honeydew;
}

.form-control:hover{
  background-color: #baebe1;
}
  
svg{ 
  color: #65b8a6;
}

  </style>
  
  