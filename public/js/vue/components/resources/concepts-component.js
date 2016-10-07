Vue.component('concepts-component', {
  template:
  `
  <template v-for="concept in concepts">
    <h2>{{ concept.title }}</h2>
    <ul>
        <template v-for="individual in concept.individualConcepts">
            <li><strong>{{ individual.term }}</strong>: {{ individual.definition }}</li>
        </template>
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
