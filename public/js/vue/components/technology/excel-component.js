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
              { term: 'Office excel vs Google excel', definition: 'Office Excel has better graphs, google excel has better functions' },
              { term: 'Element alignment', definition: 'If values are aligned to the right excel is seeing the element as a number.  If aligned left it\'s seeing them as a string' },
              { term: '', definition: '' },
            ]
        },
      ]
    }
  }
});
