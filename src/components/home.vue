<script setup>
import footer_vue from "./footer.vue";
</script>

<template>
  <div class="container-fluid container-principal text-center pt-5 pb-5">
    <h1 class="text-center pt-5 pb-5">
      Improve and organize your household chores.
    </h1>
    <div class="container text-center pt-5 pb-5">
      <div
        id="myCarousel"
        class="carousel slide carousel-fade"
        data-ride="carousel"
        data-interval="1000"
      >
        <div class="carousel-inner row w-100 mx-auto" role="listbox">
          <div class="carousel-item active col-md-3">
            <div class="panel panel-default">
              <div class="panel-thumbnail">
                <a href="#" title="image 1" class="thumb">
                  <img
                    class="img-fluid mx-auto d-block"
                    src="//via.placeholder.com/200x200?text=1"
                    alt="slide 1"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item col-md-3 active">
            <div class="panel panel-default">
              <div class="panel-thumbnail">
                <a href="#" title="image 3" class="thumb">
                  <img
                    class="img-fluid mx-auto d-block"
                    src="//via.placeholder.com/200x200?text=2"
                    alt="slide 2"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item col-md-3">
            <div class="panel panel-default">
              <div class="panel-thumbnail">
                <a href="#" title="image 4" class="thumb">
                  <img
                    class="img-fluid mx-auto d-block"
                    src="//via.placeholder.com/200x200?text=3"
                    alt="slide 3"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item col-md-3 active">
            <div class="panel panel-default">
              <div class="panel-thumbnail">
                <a href="#" title="image 5" class="thumb">
                  <img
                    class="img-fluid mx-auto d-block"
                    src="//via.placeholder.com/200x200?text=4"
                    alt="slide 4"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item col-md-3">
            <div class="panel panel-default">
              <div class="panel-thumbnail">
                <a href="#" title="image 6" class="thumb">
                  <img
                    class="img-fluid mx-auto d-block"
                    src="//via.placeholder.com/200x200?text=5"
                    alt="slide 5"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item col-md-3">
            <div class="panel panel-default">
              <div class="panel-thumbnail">
                <a href="#" title="image 7" class="thumb">
                  <img
                    class="img-fluid mx-auto d-block"
                    src="//via.placeholder.com/200x200?text=6"
                    alt="slide 6"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item col-md-3">
            <div class="panel panel-default">
              <div class="panel-thumbnail">
                <a href="#" title="image 8" class="thumb">
                  <img
                    class="img-fluid mx-auto d-block"
                    src="//via.placeholder.com/200x200?text=7"
                    alt="slide 7"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item col-md-3">
            <div class="panel panel-default">
              <div class="panel-thumbnail">
                <a href="#" title="image 2" class="thumb">
                  <img
                    class="img-fluid mx-auto d-block"
                    src="//via.placeholder.com/200x200?text=8"
                    alt="slide 8"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item col-md-3">
            <div class="panel panel-default">
              <div class="panel-thumbnail">
                <a href="#" title="image 2" class="thumb">
                  <img
                    class="img-fluid mx-auto d-block"
                    src="//via.placeholder.com/200x200?text=8"
                    alt="slide 9"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next text-faded"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>

  <!-- <div class="container-fluid container-principal text-center pt-5 pb-5">
    <h1 class="text-center pt-5 pb-5">
      Improve and organize your household chores.
    </h1>

    <div class="container text-center pt-5 pb-5">
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide carousel-fade"
        data-bs-ride="carousel"
      >
         <div class="carousel-item active" data-bs-interval="1000" > -->
  <!-- <div class="carousel-inner row w-100 mx-auto">
          <div class="carousel-item active col col-md-2">
            <div class="card card-home">
              <div class="card-body">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkboxNoLabel"
                    aria-label="..."
                  />
                </div>
                <div>
                  <img src="../assets/plate.png" alt="" class="card-img-top" />
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item col col-md-2">
            <div class="card card-home">
              <div class="card-body">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkboxNoLabel"
                    aria-label="..."
                  />
                </div>
                <div>
                  <img
                    src="../assets/aspiradora.png"
                    alt=""
                    class="card-img-top"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item col col-md-2">
            <div class="card card-home">
              <div class="card-body">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkboxNoLabel"
                    aria-label="..."
                  />
                </div>
                <div>
                  <img src="../assets/drying.png" alt="" class="card-img-top" />
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item col col-md-2">
            <div class="card card-home">
              <div class="card-body">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkboxNoLabel"
                    aria-label="..."
                  />
                </div>
                <div>
                  <img
                    src="../assets/washing.png"
                    alt=""
                    class="card-img-top"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item col col-md-2">
            <div class="card card-home">
              <div class="card-body">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkboxNoLabel"
                    aria-label="..."
                  />
                </div>
                <div>
                  <img src="../assets/pets.png" alt="" class="card-img-top" />
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>-->

  <!-- <div class="carousel-item" data-bs-interval="800">
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
                                    <img src="../assets/aspiradora.png" alt="" class="card-img-top">
                                </div> 
                            </div>     
                        </div>     
                    </div>
                </div>
            </div> -->

  <!-- <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  </div>

  <div class="d-grid gap-2 col-6 mx-auto pb-5 pt-5">
    <a class="btn btn-primary mb-5" type="button" href="/register">Start now</a>
  </div> -->

  <!-- </div> -->
  <!-- </div>  -->
  <footer_vue />
</template>

<style scoped>
.container-principal {
  background: honeydew;
}
.card-home {
  background-color: honeydew;
}

.form-check-input {
  background-color: honeydew;
}

h1 {
  color: #65b8a6;
}
@media (min-width: 768px) {
  .carousel-inner .active + .carousel-item + .carousel-item + .carousel-item {
    display: block;
  }
  .carousel-inner
    .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left)
    + .carousel-item
    + .carousel-item
    + .carousel-item {
    transition: none;
  }
  .carousel-inner .carousel-item-next,
  .carousel-inner .carousel-item-prev {
    position: relative;
    transform: translate3d(0, 0, 0);
  }

  .carousel-inner
    .active.carousel-item
    + .carousel-item
    + .carousel-item
    + .carousel-item
    + .carousel-item {
    position: absolute;
    top: 0;
    right: -25%;
    z-index: -1;
    display: block;
    visibility: visible;
  }
}
</style>
