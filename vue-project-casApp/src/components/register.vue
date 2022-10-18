<template>
    <b-container fluid>
      <b-row align-v="center" class="my-1">
        <b-col class="container-left" align-self="center" sm="6">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-triangle-half" viewBox="0 0 16 16">
          <path d="M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017.162.162 0 0 0 .054-.06.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>
          </svg>
        </b-col>
        <b-col class="container-right" align-self="center" sm="6">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        
        <b-form-group 
            id="input-group-1" 
            label="Your Name:" 
            label-for="input-1">
        <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter name"
            required
        ></b-form-input>
        </b-form-group>

        <b-form-group
            id="input-group-2"
            label="Email address:"
            label-for="input-2"
            description="We'll never share your email with anyone else.">
        <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
        ></b-form-input>
        </b-form-group>

        <b-form-group
            id="input-group-3"
            label="Password"
            label-for="input-3"
            description="Your password must be 8-20 characters long, contain letters and numbers, and must not
            contain spaces, special characters, or emoji.">
        <b-form-input 
            type="password" 
            id="text-password" 
            aria-describedby="password-help-block"
        ></b-form-input>
        </b-form-group>

    <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        v-model="form.checked"
        id="checkboxes-4"
        :aria-describedby="ariaDescribedby"
      >
        <b-form-checkbox value="me">Remember me</b-form-checkbox>
        
      </b-form-checkbox-group>
    </b-form-group>

    <b-button type="submit" variant="primary">Create account</b-button>
    
  </b-form>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
    export default {
      data() {
        return {
          form: {
            email: '',
            name: '',
            food: null,
            checked: []
          },
          show: true
        }
      },
      methods: {
        onSubmit(event) {
          event.preventDefault()
          alert(JSON.stringify(this.form))
        },
        onReset(event) {
          event.preventDefault()
          // Reset our form values
          this.form.email = ''
          this.form.name = ''
          this.form.food = null
          this.form.checked = []
          // Trick to reset/clear native browser form validation state
          this.show = false
          this.$nextTick(() => {
            this.show = true
          })
        }
      }
    }
  </script>

<style scoped>
.container-left{
  background-color: aqua;
}


svg{
    height: 100px;
    width: 100px;
    align-items: center;
    color:burlywood ;
}

.container-right{
  background-color: burlywood;
}

</style>