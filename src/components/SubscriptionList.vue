<template>
  <div class="row">
    <CategoryList />
    <div class="col-9">
      <h3>You have {{ subscriptions.length }} Subcriptions</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p, i) in products" :key="i">
            <td class="align-middle">{{ p.name }}</td>
            <td class="align-middle">
              <img :src="productImages + p.image" width="100" />
            </td>
            <td class="align-middle">{{ p.price | currency }}</td>
            <td class="align-middle">{{ p.category }}</td>
            <td class="align-middle">
              <button class="btn btn-sm btn-danger mx-2" @click="deleteProduct(p)">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CategoryList from "./CategoryList";
import { mapState, mapActions } from "vuex";

export default {
  components: { CategoryList },
  computed: {
    ...mapState(["subscriptions", "products", "productImages"])
    
  },
  methods: {
    ...mapActions(["setSubscriptionsAction"])
  },
  created() {
    this.setSubscriptionsAction();
  }
};
</script>