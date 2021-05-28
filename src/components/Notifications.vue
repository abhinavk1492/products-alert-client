<template>
  <div class="row">
    <CategoryList />
    <div class="col-9">
      <div v-if="notifications.length">
        <h3>You have {{ notifications.length }} notificaion(s)</h3>
        <hr />
      </div>

      <div v-for="(n, idx) in notifications" :key="idx">
        <div class="px-2 d-flex justify-content-between">
          <div>
            Great News!
            <b>{{ n.prodName }}</b>
            price reduced to ${{ n.newPrice }}
            <br />
            <!-- {{ item.quantity }} x ${{ item.product.price }} -->
          </div>
          <div>
            <a href="#" class="btn-close" @click.prevent="closeNotification(n)"></a>
          </div>
        </div>
        <hr />
      </div>

      <!-- <div class="d-flex justify-content-between">
      <span>Total: ${{ cartTotalPrice }}</span>
      <a href="#" @click.prevent="clearCartItems()">Clear Cart</a>
      </div>-->
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CategoryList from "./CategoryList";
export default {
  computed: {
    ...mapState(["notifications"])
  },
  components: { CategoryList },
  mounted() {},
  created() {
    this.setNotificationsAction();
  },
  methods: {
    ...mapActions(["setNotificationsAction", "closeNotification"])
  }
};
</script>

<style>
</style>