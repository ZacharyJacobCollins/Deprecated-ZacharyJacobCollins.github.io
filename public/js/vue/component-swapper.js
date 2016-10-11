//Component swapper vue instance.  On the initial home page.
new Vue({
  el: 'html',
  data: {
    currentComponent: 'home-component',
  },
  ready: function() {
    this.loadComponent();
  },
  methods: {
    //Swap out the current component div found in /home/reference.html
    swapComponent: function(component) {
      this.currentComponent = component;
    },
    //loads the current component found in the #hash into the view
    loadComponent: function() {
      console.log(window.location.hash);
    },
  },

});
