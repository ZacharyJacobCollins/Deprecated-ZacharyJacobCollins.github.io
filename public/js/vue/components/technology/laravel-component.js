Vue.component('laravel-component', {
  template:
  `
    <h1>Laravel</h1>
    <hr />
    <br /><br />
    <h3> Code Snippets</h3>
    <hr />

    <ul>
      <template v-for="snippet in snippets">
        <li><strong>{{ snippet.title }}</strong>: {{ snippet.code }}</li>
        <br />
      </template>
    </ul>
  `,
  data: function() {
    return {
      snippets: [
        {
          title: 'Compact to pass array to view',
          code: "public function edit(Note $note) { return view('notes.edit', compact('note')); }",
        },
        {
          title: 'Dump Composer stuff to reset migrations.  Run from cli.  ',
          code: 'composer dump-autoload',
        },
      ],
      //Notes on routes
      routes: [

      ],
      //Notes on forms
      forms: [
          {
              title: 'The update http request',
              info: '{{ method_field(\'PATCH\') }}'
          },
          {
              title: 'The delete http request',
              info: '{{ method_field(\'DELETE\') }}'
          },
      ]
    };
  }
});
