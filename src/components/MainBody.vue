<template>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="0"
        class=""
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        class="active"
        aria-current="true"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
        class=""
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item">
        <img src="carusel.jpg" />

        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p>
              Some representative placeholder content for the first slide of the
              carousel.
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-item active">
        <img src="carusel2.jpg" />

        <div class="container">
          <div class="carousel-caption">
            <h1>Another example headline.</h1>
            <p>
              Some representative placeholder content for the second slide of
              the carousel.
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="carusel3.jpg" />

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>
              Some representative placeholder content for the third slide of
              this carousel.
            </p>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="container">
    <div class="row">
      <div class="container text-center">
        <h3>
          Embark on a crystal journey with us! Discover the perfect crystal that
          resonates with your unique personality and awakens your energy.
          Explore our collection now.
        </h3>
      </div>
    </div>

    <div class="row" style="height: 180px">
      <div class="col-sm-4">
        <img
          src="old/amethyst_neck.jpg"
          class="img-fluid rounded"
          alt="amethyst_neck.jpg"
        />
        <p>AMETHYST necklace</p>
      </div>
      <div class="col-sm-4">
        <img
          src="old/rose_quartz.jpg"
          class="img-fluid rounded"
          alt="rose_quartz.jpg"
        />
        <p>ROSE QUARTZ necklace</p>
      </div>
      <div class="col-sm-4">
        <img
          src="old/citrine.jpg"
          class="img-fluid rounded"
          alt="citrine.jpg"
        />
        <p>CITRINE necklace</p>
      </div>
    </div>
  </div>
</template>
<style>
.container {
  margin-top: 100px;
  margin-bottom: 200px;
}
</style>
