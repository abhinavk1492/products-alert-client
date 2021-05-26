<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Vue Cart</router-link>
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
          <li class="nav-item active" v-for="(p, i) in pages" :key="i">
            <router-link class="nav-link" v-if="p.slug != 'home'" :to="'/' + p.slug">
              {{
              p.name
              }}
            </router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/admin">Admin</router-link>
          </li>
        </ul>
      </div>
    </div>
    <CartSummary />
    <Logout />
  </nav>
</template>

<script>
import { mapState } from "vuex";
import CartSummary from "./CartSummary";
import Logout from "./Logout";

export default {
  components: { CartSummary, Logout },
  computed: {
    ...mapState(["pages"])
  }
};
</script>