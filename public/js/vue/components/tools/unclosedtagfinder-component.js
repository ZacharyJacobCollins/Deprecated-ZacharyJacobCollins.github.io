Vue.component('unclosedtagfinder-component', {
  template:
  `
    <textarea id="unclosed-tag-finder-input" style="width:100%;height:300px">
    </textarea>
    <div><input type="button" id="unclosed-tag-finder-button" value="Submit" ></input></div>
    <br />
    <h3>Results</h3>
    <pre id="unclosed-tag-finder-results">
    </pre>
  `,
});
