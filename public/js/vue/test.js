// create a root instance
var test = new Vue({
  el: '#example'
})

// define
var MyComponent = test.extend({
  template: '<div>A custom component!</div>'
})
// register
test.component('my-component', MyComponent)
