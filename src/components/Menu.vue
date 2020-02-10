<template>
  <div>
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
      class="flex-column col-12 col-sm-6 col-md-4 col-lg-3
      position-fixed px-0 shadow justify-content-start"
      :class="[menuActive && 'active', left ? 'navbar-left' : 'navbar-right']"
    >
      <b-nav-text class="d-flex w-100">
        <b-button-close class="close text-dark mx-3" @click="offMenu"/>
        <b-nav-text v-if="welcome" class="mx-2">{{welcome}}</b-nav-text>
      </b-nav-text>
      <b-input-group v-if="searchable" class="mt-3">
        <b-form-input v-model="inputVal"></b-form-input>
        <b-input-group-append>
          <b-button variant="primary" class="rounded-0" @click="doSearch">Button</b-button>
        </b-input-group-append>
      </b-input-group>
      <b-nav v-for="(item, index) in menuData" :key="item.name"
        class="w-100"
      >
        <b-card-header v-if="item.children.length" header-tag="header"
          class="p-0 border-0 m-0 rounded-0 w-100" role="tab"
        >
              <b-button
                block
                v-b-toggle="`accordion-${index}`"
                variant="light"
                class="w-100 text-left border-0 rounded-0 px-3 py-2"
              >
                <font-awesome-icon v-if="item.meta.icon" :icon="item.meta.icon" />
                {{ item.meta.displayName }}
                <font-awesome-icon icon="chevron-right" class="ml-2"/>
              </b-button>
            </b-card-header>
            <b-collapse :id="`accordion-${index}`" accordion="my-accordion"
              role="tabpanel" v-if="item.children.length"
              class="w-100"
            >
              <b-card-body class="p-0">
                <b-nav vertical class="p-0 border-top">
                  <b-nav-item v-for="child in item.children" :key="child.name"
                    class="text-dark text-left" :href="child.path"
                  >
                    {{child.meta.displayName}}
                  </b-nav-item>
                </b-nav>
              </b-card-body>
            </b-collapse>
            <b-nav-item v-if="!item.children.length" type="light" class="w-100" :href="item.path">
              <font-awesome-icon v-if="item.meta.icon" :icon="item.meta.icon" />
              {{item.meta.displayName}}
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
    doSearch() {
      this.$emit('searching');
    },
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  props: {
    menuActive: Boolean,
    menuData: Array,
    left: Boolean,
    welcome: [Boolean, String],
    searchable: Boolean,
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
</style>
