//Component swapper vue instance.  On the initial home page.
new Vue({
  el: 'html',
  data: {
    currentComponent: 'home-component',
  },
  ready: function() {
    //load a component based on the current hash
    this.loadComponent();
  },
  methods: {
    //Swap out the current component div found in /home/reference.html
    swapComponent: function(component) {
      this.currentComponent = component;
    },
    //loads the current component found in the #hash into the view
    loadComponent: function() {
      //Call swap component on the current hash
      this.swapComponent(window.location.hash);
    },
  },

});
