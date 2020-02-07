<template>
  <b-container fluid id="app" class="bg-light p-0">
    <b-container class="container-md p-0 d-flex " ref="parentNav">
      <b-navbar toggleable="md" class="p-0" ref="leftNav" >
        <b-navbar-toggle @click="isLeftMenuActive = !isLeftMenuActive" target="nav-collapse"
          class="border-0"
        />
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item v-for="item in menuLeftData" :key="item.name">
              <font-awesome-icon v-if="item.meta.icon" :icon="item.meta.icon" />
              <b-nav-text class="p-0 m-0" v-else>{{item.meta.displayName}}</b-nav-text>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <b-navbar class="ml-auto p-0" ref="rightNav">
        <b-navbar-toggle target="nav-collapse1" @click="isMenuActive = !isMenuActive"/>
        <b-collapse id="nav-collapse1" is-nav>
          <b-navbar-nav>
            <b-nav-item class="dropdown">
              <b-dropdown id="dropdown-1" text="Język" variant="outline-dark">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
              </b-dropdown>
            </b-nav-item>
            <b-nav-item @click="isMenuActive = !isMenuActive" class="font-weight-bold">
              <b-nav-text class="d-none d-lg-inline mr-1">Text</b-nav-text>
              <font-awesome-icon icon="user"/>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
    <Menu
      @triggerMenu="isMenuActive = false"
      :menuActive="isMenuActive"
      :menuData="menuData"
      hello
      />
    <Menu
      @triggerMenu="isLeftMenuActive = false"
      :menuActive="isLeftMenuActive"
      :menuData="menuLeftData"
      left
      searchable
      v-model="valueInput"
    />
  </b-container>
</template>

<script>
import Menu from './components/Menu.vue';
import json from './menuTree.json';
import jsonLeft from './menuLeft.json';

export default {
  name: 'app',
  data() {
    return {
      valueInput: '',
      isMenuActive: false,
      menuData: null,
      menuLeftData: null,
      isLeftMenuActive: false,
    };
  },
  components: {
    Menu,
  },
  mounted() {
    this.menuData = json;
    this.menuLeftData = jsonLeft;
    this.$nextTick(() => {
      // eslint-disable-next-line no-unused-expressions
      this.$refs.leftNav.offsetWidth
      + this.$refs.rightNav.offsetWidth
      > this.$refs.parentNav.offsetWidth
        && this.$refs.leftNav.classList.add('nav-over-size');
    });
    // eslint-disable-next-line no-unused-expressions
    // const rightNavs = this.$refs.rightNav.offsetWidth;
    // const parentNavs = this.$refs.parentNav.offsetWidth;
  },
};
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

.dropdown .nav-link{
  padding: 0 !important;
}
#nav-collapse .nav-link{
  padding: 12px 18px;
}
.nav-over-size{
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}
.nav-over-size button{
  display: block !important;
}
.nav-over-size .navbar-collapse{
  display: none !important;
}

@include media-breakpoint-down(sm) {
  .container-md{
    width: 100% !important;
    max-width: 100% !important;
  }
}
</style>
