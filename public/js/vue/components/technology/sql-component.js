Vue.component('sql-component', {
  template:
  `
    <h2>SQL</h2>
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
                  { term: 'char', definition: 'Maximum length of 8,000 characters.( Fixed length non-Unicode characters)' },
                  { term: 'varchar', definition: 'Maximum of 8,000 characters.(Variable-length non-Unicode data).' },
                  { term: 'varchar(max)', definition: 'Maximum length of 231characters, Variable-length non-Unicode data (SQL Server 2005 only).' },
                  { term: '', definition: '' },
              ],
          },
        ],
      }
    }
  });
