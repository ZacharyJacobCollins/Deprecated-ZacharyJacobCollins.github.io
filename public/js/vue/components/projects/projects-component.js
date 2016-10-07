Vue.component('projects-component', {
  template:
  `
    </h1>Projects</h1>
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
