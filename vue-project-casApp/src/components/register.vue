<template>
  <div class="container">
    <div class="card mb-3 card" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-sm-4 col-left">
        <img src="../assets/triangle-half.svg" class="img-fluid rounded-start img-logo" alt="">
      </div>
      <div class="col-sm-8 col-right">
        <div class="card-body">
          <h1 class="card-title">Register</h1>
          <form class="form-signin">  
            <div class="mb-3">
              <label for="inputText1" class="form-signin-label">Enter Name</label>
              <input type="text" class="form-control " id="inputText1" placeholder="Your full name" required autofocus>
            </div>
          
            <div class="mb-3">
              <label for="inputEmail1" class="form-signin-label">Email address</label>
              <input type="email" class="form-control" id="inputEmail1" placeholder="Email Addres" required autofocus>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div class="mb-3">
              <label for="inputPassword" class="form-signin-label">Password</label>
              <input type="password" class="form-control" id="inputPassword" placeholder="********" required>
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
h1{
  color: #224156;;
  text-align: center;
}

.col-left{
  background-color: #224156;
}
.col-right{
  background-color: #65b8a6;
}



.img-logo{
    height: 200px;
    width: 200px;
    color: #65b8a6;
}



</style>  -->