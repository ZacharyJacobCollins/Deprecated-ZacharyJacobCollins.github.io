//Component swapper vue instance
new Vue({
  el: 'html',
  data: {
    currentComponent: 'home-component',
  },
  methods: {
    swapComponent: function(component) {
      console.log(component);
      this.currentComponent = component;
    }
  }
});
