import Vue from "vue";
import VueRouter from "vue-router";

import Pages from "../components/Pages";
import ProductList from "../components/ProductList";
import ShoppingCart from "../components/ShoppingCart";
import Admin from "../components/admin/Admin";
import Products from "../components/admin/Products";
import AdminPages from "../components/admin/Pages";
import PageEditor from "../components/admin/PageEditor";
import ProductEditor from "../components/admin/ProductEditor";
import Login from "../components/admin/Login";
import SubscriptionList from "../components/SubscriptionList";
import Notifications from "../components/Notifications";

import dataStore from "../store";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",

  routes: [
    {
      path: "/admin",
      component: Admin,
      beforeEnter(to, from, next) {
        if (dataStore.state.auth.authenticated) {
          next();
        } else {
          next("/login");
        }
      },
      children: [
        { path: "pages", component: AdminPages },
        { path: "pages/:op(add|edit)/:id?", component: PageEditor },
        { path: "products", component: Products },
        { path: "products/:op(add|edit)/:id?", component: ProductEditor },
        // { path: "orders", component: Orders },
        { path: "*", redirect: "/admin/products" },
      ],
    },
    { path: "/categories/:category", component: ProductList },
    { path: "/login", component: Login },
    { path: "/subscriptions", component: SubscriptionList },
    { path: "/notifications", component: Notifications },
    { path: "/cart", component: ShoppingCart },
    { path: "/:slug?", component: Pages },
    { path: "*", redirect: "/" },
  ],
});
