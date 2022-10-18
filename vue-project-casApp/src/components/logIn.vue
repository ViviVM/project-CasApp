<template>
<b-container>
    <form class="form-signin">
         <h1 class="mb-3 font-weight-normal">Sign In</h1>
            <label for="inputEmail1" class="form-signin-label">Email address</label>
                <input type="email" class="form-control" id="inputEmail1" placeholder="Email Addres" required autofocus>
            <label for="inputPassword" class="form-signin-label">Password</label>
                <input type="password" class="form-control" id="inputPassword" placeholder="Password" required>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Remember me </label>
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
    </form>

</b-container>
</template>