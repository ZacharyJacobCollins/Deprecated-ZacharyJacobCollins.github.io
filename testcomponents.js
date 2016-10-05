// The header component
Vue.component('foo', {
  template:
  `
    <h1>Foo component</h1>
  `,
});

new Vue({
  el: 'body',
  data: {
    currentComponent: null,
    componentsArray: ['foo', 'bar']
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
