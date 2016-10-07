Vue.component('projects-component', {
  template:
  `
    Projects
  `,
  data: function() {
    return {
      projectData: [
          { text: 'Remember', component: 'remember-component'},
          { text: 'Go chat', component: 'gochat-component'},
          { text: 'Valet', component: 'valet-component'},
          { text: 'Cracking the coding interview', component: 'cracking-component'},
      ],
    }
  }
});
