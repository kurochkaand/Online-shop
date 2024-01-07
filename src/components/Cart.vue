<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="row g-5">
      <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Your cart</span>
          <span class="badge bg-primary rounded-pill">3</span>
        </h4>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Zircon</h6>
              <small class="text-body-secondary">3 grams</small>
            </div>
            <span class="text-body-secondary">$12</span>
          </li>
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Ruby</h6>
              <small class="text-body-secondary">1 gram</small>
            </div>
            <span class="text-body-secondary">$8</span>
          </li>
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Ametyst</h6>
              <small class="text-body-secondary">5 grams</small>
            </div>
            <span class="text-body-secondary">$5</span>
          </li>

          <li class="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$25</strong>
          </li>
        </ul>
      </div>
      <div class="col-md-7">
        <h4 class="mb-3">Billing address</h4>
        <form class="needs-validation" action="" novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
              <div class="invalid-feedback">Valid last name is required.</div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email <span class="text-body-secondary">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com" />
              <div class="invalid-feedback">Please enter a valid email address for shipping updates.</div>
            </div>

            <div class="col-12">
              <label for="telephone" class="form-label">Telephone number</label>
              <input type="tel" class="form-control" id="telephone" value="+" pattern="+[0-9]{12}" required />
              <div class="invalid-feedback">Please enter your telephone number.</div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
              <div class="invalid-feedback">Please enter your shipping address.</div>
            </div>

            <div class="col-md-5">
              <label for="country" class="form-label">Country</label>
              <select class="form-select" id="country" required>
                <option value="">Choose...</option>
                <option>Czech Republic</option>
                <option>Slovak Republic</option>
                <option>Poland</option>
              </select>
              <div class="invalid-feedback">Please select a valid country.</div>
            </div>

            <div class="col-md-4">
              <label for="address" class="form-label">City</label>
              <input type="text" class="form-control" id="address" placeholder="" required />
              <div class="invalid-feedback">Please enter your city.</div>
            </div>

            <div class="col-md-3">
              <label for="zip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="zip" placeholder="" required />
              <div class="invalid-feedback">Zip code required.</div>
            </div>
          </div>

          <hr class="my-4" />

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="same-address" />
            <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
          </div>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info" />
            <label class="form-check-label" for="save-info">Save this information for next time</label>
          </div>

          <hr class="my-4" />

          <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to payment</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 70px;
}
</style>
