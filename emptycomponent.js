Vue.component('home-component', {
  template:
  `
  `,
  data: function() {
    return {

    }
  }
});

Vue.component('home-component', {
  template:
  `
    <h1> Test </h1>
  `,
});

Vue.component('devops-component', {
  template:
  `
  <template v-for="concept in concepts">
    <h2>{{ concept.title }}</h2>
    <ul>
        <template v-for="individual in concept.individualConcepts">
        </template>
        <li><strong>{{ individual.term }}</strong>: {{ individual.definition }}</li>
    </ul>
  </template>
  `,
  data: function() {
    return {
      concepts: [
        {
            title: 'Devops',
            individualConcepts: [
                { term: 'Greenfield deployment', definition: 'installation and configuration of a network where none existed before.  ie. a new office.' },
                { term: 'Brownfield deployment', definition: 'an upgrade or addition to an existing network and uses some legacy components' },
                { term: '', definition: '' },
            ]
        },
      ]
    }
  }
});
