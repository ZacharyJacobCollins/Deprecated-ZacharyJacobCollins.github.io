//Component swapper vue instance
new Vue({
  el: 'html',
  data: {
    currentComponent: null,
    componentsArray: ['statistics-component', 'bar'],
  },
  components: {
    'bar': {
      template: '<h1>Bar component</h1>'
    }
  },
  created: function() {
    eventHub.$on('swapComponent', function (component) {
      console.log(component);
    });
  },
  methods: {
    swapComponent: function(component) {
      this.currentComponent = component;
    }
  }
});
