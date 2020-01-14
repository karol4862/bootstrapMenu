<template>
  <div class="hello">
    <div
      id="navbar-transparent-background"
      class="position-fixed"
      :class="menuActive && 'active'"
      @click="offMenu"
    >
    </div>
    <b-navbar
      variant="light"
      id="navbar-flow"
      class="navbar-right flex-column col-12 col-sm-6 col-md-4 col-lg-3
      position-fixed px-0 shadow justify-content-start"
      :class="menuActive && 'active'"
    >
      <b-nav-text class="d-flex w-100">
        <b-button-close class="close text-dark mx-3" @click="offMenu"/>
        <b-nav-text class="mx-2">Witaj</b-nav-text>
      </b-nav-text>
      <b-nav>
        <b-nav-item type="light" class="w-100">
          <font-awesome-icon icon="home" />
          Pulpit
        </b-nav-item>
        <div role="tablist" class="w-100">
          <b-card no-body class="border-0">
            <b-card-header header-tag="header" class="p-0 border-0 m-0 rounded-0" role="tab">
              <b-button
                block href="#"
                v-b-toggle.accordion-1
                variant="light"
                class="w-100 text-left border-0 rounded-0 px-3 py-2"
              >
                <font-awesome-icon icon="user" />
                Konta
                <font-awesome-icon icon="chevron-right" class="ml-2"/>
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card-body class="p-0">
                <b-nav vertical class="p-0 border-top">
                  <b-nav-item class="text-dark text-left" href="#">
                  Link
                  </b-nav-item>
                  <b-nav-item class="text-dark text-left" href="#">
                    Link
                  </b-nav-item>
                  <b-nav-item class="text-dark text-left" href="#">
                    Link
                  </b-nav-item>
                </b-nav>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="border-0">
            <b-card-header header-tag="header" class="p-0 border-0 m-0 rounded-0" role="tab">
              <b-button
                block href="#"
                v-b-toggle.accordion-2
                variant="light"
                class="w-100 text-left border-0 rounded-0 px-3 py-2"
              >
                <font-awesome-icon icon="cogs" />
                Konfiguracja
                <font-awesome-icon icon="chevron-right" class="ml-2"/>
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body class="p-0">
                <b-nav vertical class="p-0 border-top">
                  <b-nav-item class="text-left" href="#">
                  Link
                  </b-nav-item>
                  <b-nav-item class="text-left" href="#">
                    Link
                  </b-nav-item>
                  <b-nav-item class="text-left" href="#">
                    Link
                  </b-nav-item>
                </b-nav>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
        <b-nav-item type="light" class="w-100" href="#">
          <font-awesome-icon icon="folder-open" />
          Zamówienia
        </b-nav-item>
        <b-nav-item type="light" class="w-100">
          <font-awesome-icon icon="share" />
          Reklamacje
        </b-nav-item>
        <b-nav-item type="light" class="w-100">
          <font-awesome-icon icon="file-alt" />
          Raporty
        </b-nav-item>
        <b-nav-item type="light" class="w-100">
          <font-awesome-icon icon="archive" />
          Schowek
        </b-nav-item>
        <b-nav-item type="light" class="w-100">
          <font-awesome-icon icon="sign-out-alt" />
          Wyloguj
        </b-nav-item>
      </b-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    offMenu() {
      this.$emit('triggerMenu');
    },
  },
  props: {
    menuActive: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar-right, .navbar-icons{
  top:0;
  right:0;
  transform: translateX(100%);
  transition: .3s transform;
  height:100vh;
}
.navbar-item{
  list-style-type: none;
}
.navbar-left{
  top:0;
  left:0;
  transform: translateX(-100%);
  transition: .3s transform;
  height:100vh;
}
.navbar-right.active, .navbar-left.active{
  transform: translateX(0);
}
#navbar-transparent-background{
  top:0;
  right:0;
  height:100vh;
  width:100vw;
  display: none;
}
#navbar-transparent-background.active{
  display: block;
}
.navbar-icons.icons-on{
  transform: translateX(0);
}
.nav-link, .card-header .btn{
  text-transform: uppercase;
  color: black;
  text-align: left;
}
.navbar-icons{
  font-size: 1.3rem;
}
#navbar-flow .nav-link, .navbar-icons .nav-link, .card-header .btn{
  transition:.2s;
}
#navbar-flow .nav-link:hover, .navbar-icons .nav-link:hover, .card-header .btn:hover{
  background-color: #B30202 !important;
  color:white !important;
}
.fa-chevron-right{
  font-size: .8rem;
  transform: rotate(90deg);
  transition: .1s .2s transform;
}
.btn[aria-expanded*='true'] .fa-chevron-right{
  transform: rotate(0);
}
.btn:active, .btn:focus{
  background-color: transparent !important;
  box-shadow: none;
}
</style>
