<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top" style="background-image: url(@/assets/black_marmor.jpg)">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Crystals</a>
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
              <a class="nav-link" href="index.html">Catalog</a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="Log_in.html">Log in</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-light" aria-current="page" href="cart.html">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
