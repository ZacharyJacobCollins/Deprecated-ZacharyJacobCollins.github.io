// The header component
Vue.component('stats', {
  props: ['sections'],
  template:
  `
    <h1>Stats</h1>
    <template v-for="section in sections">
      f
    </template>
  `,
});

//Component swapper vue instance
new Vue({
  el: '#componentSwapper',
  data: {
    currentComponent: null,
    componentsArray: ['stats', 'bar'],
    sections: [
      {},
      {},
    ]
  },
  components: {
    'bar': {
      template: '<h1>Bar component</h1>'
    }
  },
  methods: {
    swapComponent: function(component)
    {
      this.currentComponent = component;
    }
  }
})
