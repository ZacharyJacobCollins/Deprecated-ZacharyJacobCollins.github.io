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
          title: 'Lab 2',
          code: 'https://gist.github.com/ZacharyJacobCollins/c05b4dce4a85f9f46bed9d6558607139',
        },
      ]
    };
  }
});
