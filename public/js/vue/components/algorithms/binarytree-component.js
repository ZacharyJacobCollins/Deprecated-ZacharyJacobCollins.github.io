Vue.component('binarytree-component', {
  template:
  `
    <h1>Binary Tree Implementation </h1>
    <a href="https://www.nczonline.net/blog/2009/06/09/computer-science-in-javascript-binary-search-tree-part-1/">Link</a>
    <h3>Notable Features </h3>
    <ul>
        <li>The number of nodes in a binary tree of depth n is precisely 2^n - 1.</li>
        <li>In a binary tree, the worst search time is O(n), best is O(log_2 (n)) which is a perfectly balanced tree.</li>
        <li>Average runtime is somewhere between those two.</li>
        <li>Left of node is lesser than parent.  Right is greater.</li>
        <li>To find element that is less than a parent go left, greater than, go right.</li>
        <li> </li>
        <li> </li>
        <li> </li>
    </ul>

    <br />

    <div id="tree">Tree

    </div>

    <script>
      new Vue({
        el: 'tree',
        data: {
          root: null,

        },
        ready: function() {
          this.generate();
        },
        methods: {
          generate: function() {
            document.getElementById('tree').innerHTML = 'test';
          },
          //Add a node to the binary tree
          add: function(value) {
            current;
            node: { value: value, left: null, right: null }

            //If the root of the tree is null, then the root is set to the added node.
            if (this.root === null) {
              this.root = node;
            } else {
              current = this.root;

              while(true) {
                //If the to be added value is less than the current value, then go left.
                if( value < current.value) {

                }

                  //if there is no left value then the node should be placed here

              };

            }

          },
          contains: function(value) {

          },
          remove: function(value) {

          },
          size: function() {

          },
          toArray: function() {

          },
          toString: function() {

          },
        }
      });
    </script>
  `,
});
