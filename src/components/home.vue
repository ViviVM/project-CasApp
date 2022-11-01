<script setup>

import footer_vue from './footer.vue';
</script>


<template>
   
    <div class="container-fluid container-principal text-center pt-5 pb-5">
        
        <h1 class="text-center pt-5 pb-5">Improve and organize your household chores.</h1>
        
    <div class="container text-center pt-5 pb-5">
        
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">

            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="800">
                <div class="carousel-caption d-none d-md-block"></div>
            </div>

            <div class="carousel-item active" >
                <div class="row">

                    <div class="col col-md-2">
                        <div class="card card-home">  
                            <div class="card-body">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="checkboxNoLabel" aria-label="...">
                                </div>
                                <div>
                                    <img src="../assets/plate.png" alt="" class="card-img-top">
                                </div> 
                            </div>     
                        </div>     
                    </div>

                    <div class="col col-md-2">
                        <div class="card card-home">  
                            <div class="card-body">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="checkboxNoLabel" aria-label="...">
                                </div>
                                <div>
                                    <img src="../assets/aspiradora.png" alt="" class="card-img-top">
                                </div> 
                            </div>     
                        </div>     
                    </div>

                    <div class="col col-md-2">
                        <div class="card card-home">  
                            <div class="card-body">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="checkboxNoLabel" aria-label="...">
                                </div>
                                <div>
                                    <img src="../assets/drying.png" alt="" class="card-img-top">
                                </div> 
                            </div>     
                        </div>     
                    </div>

                    <div class="col col-md-2">
                        <div class="card card-home">  
                            <div class="card-body">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="checkboxNoLabel" aria-label="...">
                                </div>
                                <div>
                                    <img src="../assets/washing.png" alt="" class="card-img-top">
                                </div> 
                            </div>     
                        </div>     
                    </div>

                    <div class="col col-md-2">
                        <div class="card card-home">  
                            <div class="card-body">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="checkboxNoLabel" aria-label="...">
                                </div>
                                <div>
                                    <img src="../assets/pets.png" alt="" class="card-img-top">
                                </div> 
                            </div>     
                        </div>     
                    </div>
                </div>
            </div>
        
            <div class="carousel-item">
                <div class="row">

                    <div class="col col-md-2">
                        <div class="card card-home">  
                            <div class="card-body">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="checkboxNoLabel" aria-label="...">
                                </div>
                                <div>
                                    <img src="../assets/household.png" alt="" class="card-img-top">
                                </div> 
                            </div>     
                        </div>     
                    </div>

                    <div class="col col-md-2">
                        <div class="card card-home">  
                            <div class="card-body">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="checkboxNoLabel" aria-label="...">
                                </div>
                                <div>
                                    <img src="../assets/cleaning-products.png" alt="" class="card-img-top">
                                </div> 
                            </div>     
                        </div>     
                    </div>

                    <div class="col col-md-2">
                        <div class="card card-home">  
                            <div class="card-body">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="checkboxNoLabel" aria-label="...">
                                </div>
                                <div>
                                    <img src="../assets/home-appliance.png" alt="" class="card-img-top">
                                </div> 
                            </div>     
                        </div>     
                    </div>

                    <div class="col col-md-2">
                        <div class="card card-home">  
                            <div class="card-body">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="checkboxNoLabel" aria-label="...">
                                </div>
                                <div>
                                    <img src="../assets/clean.png" alt="" class="card-img-top">
                                </div> 
                            </div>     
                        </div>     
                    </div>

                    <div class="col col-md-2">
                        <div class="card card-home">  
                            <div class="card-body">
                                <div class="form-check check">
                                    <input class="form-check-input" type="checkbox" value="" id="checkboxNoLabel" aria-label="...">
                                </div>
                                <div>
                                    <img src="../assets/pets.png" alt="" class="card-img-top">
                                </div> 
                            </div>     
                        </div>     
                    </div>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

        </div>
    </div>
 
        <div class="d-grid gap-2 col-6 mx-auto pb-5 pt-5">
            <a class="btn btn-primary mb-5" type="button" href="/register">Start now</a>
        </div>

         </div>
    </div>
    <footer_vue/>
</template>


<style scoped>
.container-principal{
  background: honeydew;
}
.card-home{
    background-color: honeydew;
}

.form-check-input{
    background-color: honeydew;
}


h1{
    color: #65b8a6;
}
 


</style>