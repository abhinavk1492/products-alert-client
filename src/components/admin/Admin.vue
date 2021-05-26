<template>
  <div class="container-fluid">
    <div class="row">
      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link class="btn btn-link" to="/admin/products">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="btn btn-link " to="/admin/pages">Pages</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="col">
        <router-view />
      </div>
    </div>
  </div>
</template>
