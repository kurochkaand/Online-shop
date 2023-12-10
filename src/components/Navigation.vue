<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top nav-back">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">Crystals</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/katia">katia</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/weight_calc">Weight Calculator</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/ConvertAnna">Converter</RouterLink>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/login">Log in</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-light" aria-current="page" href="/cart">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
.nav-back {
  background-image: url("@/assets/black_marmor.jpg");
}
</style>
