<template>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        class="active"
        aria-current="true"
      ></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item">
        <img src="@/assets/obsidian3.jpg" />
        <!-- Text for Image 1 -->
      </div>
      <div class="carousel-item active">
        <img src="@/assets/carusel2.jpg" />
        <div class="carousel-caption">
          <h5 style="font-size: xx-large">BLACK FRIDAY IS HERE!</h5>
          <p style="font-size: x-large">Up to 50% off discount</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/carusel3.jpg" />

        <div class="container"></div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="container">
    <div class="row">
      <div class="container text-center">
        <p
          style="
            margin-top: 100px;
            margin-bottom: 100px;
            font-size: larger;

            font-family: Arial, Helvetica, sans-serif;
          "
        >
          Embark on a crystal journey with us! Discover the perfect crystal that resonates with your unique personality and
          awakens your energy. Explore our collection now.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-4">
        <img src="@/assets/amethyst_neck.jpg" class="img-fluid rounded" alt="amethyst_neck.jpg" />
        <p>AMETHYST necklace</p>
      </div>
      <div class="col-sm-4">
        <img src="@/assets/rose_quartz.jpg" class="img-fluid rounded" alt="rose_quartz.jpg" />
        <p>ROSE QUARTZ necklace</p>
      </div>
      <div class="col-sm-4">
        <img src="@/assets/citrine.jpg" class="img-fluid rounded" alt="citrine.jpg" />
        <p>CITRINE necklace</p>
      </div>
    </div>
  </div>
</template>
<style>
.col-sm-4 img:hover {
  transition: transform 0.5s ease;
  transform: scale(1.1);
}
.carousel-inner img {
  height: 400px;
  width: 100%;
  object-fit: cover;
}
</style>
