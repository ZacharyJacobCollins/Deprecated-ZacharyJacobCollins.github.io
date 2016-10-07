Vue.component('excel-component', {
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
            title: 'Excel Resources',
            individualConcepts: [
              { term: 'Formulas and various trainings website', definition: 'https://exceljet.net/formulas' },
              { term: '', definition: '' },
            ]
        },
        {
            title: 'Excel Concepts',
            individualConcepts: [
              { term: '', definition: '' },
              { term: '', definition: '' },
            ]
        },
      ]
    }
  }
});
