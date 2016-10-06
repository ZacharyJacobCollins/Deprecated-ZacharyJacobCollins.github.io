//Component swapper vue instance.  On the initial home page.
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
