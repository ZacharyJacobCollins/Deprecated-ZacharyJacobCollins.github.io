Vue.component('unclosedtagfinder-component', {
  template:
  `
    <h1> Unclosed tag findrer </h1>
    <textarea id="unclosed-tag-finder-input" style="width:100%;height:300px">
    </textarea>
    <div><input type="button" id="unclosed-tag-finder-button" value="Submit" ></input></div>
    <br />
    <h3>Results</h3>
    <pre id="unclosed-tag-finder-results">
    </pre>

    <script>
      function isSelfClosingTag(tagName) {
          return tagName.match(/area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr|script/i);
      }

      $('#unclosed-tag-finder-button').click(function () {
          var input = $('#unclosed-tag-finder-input').val();
          var tags = [];
          $.each(input.split('\n'), function (i, line) {
              $.each(line.match(/<[^>]*[^/]>/g) || [], function (j, tag) {
                  var matches = tag.match(/<\/?([a-z0-9]+)/i);
                  if (matches) {
                      tags.push({tag: tag, name: matches[1], line: i+1, closing: tag[1] == '/'});
                  }
              });
          });
          if (tags.length == 0) {
              $('#unclosed-tag-finder-results').text('No tags found.');
              return;
          }
          var openTags = [];
          var error = false;
          var indent = 0;
          for (var i = 0; i < tags.length; i++) {
              var tag = tags[i];
              if (tag.closing) {
                  var closingTag = tag;
                  if (isSelfClosingTag(closingTag.name)) {
                      continue;
                  }
                  if (openTags.length == 0) {
                      $('#unclosed-tag-finder-results').text('Closing tag ' + closingTag.tag + ' on line ' + closingTag.line + ' does not have corresponding open tag.');
                      return;
                  }
                  var openTag = openTags[openTags.length - 1];
                  if (closingTag.name != openTag.name) {
                      $('#unclosed-tag-finder-results').text('Closing tag ' + closingTag.tag + ' on line ' + closingTag.line + ' does not match open tag ' + openTag.tag + ' on line ' + openTag.line + '.');
                      return;
                  } else {
                      openTags.pop();
                  }
              } else {
                  var openTag = tag;
                  if (isSelfClosingTag(openTag.name)) {
                      continue;
                  }
                  openTags.push(openTag);
              }
          }
          if (openTags.length > 0) {
              var openTag = openTags[openTags.length - 1];
              $('#unclosed-tag-finder-results').text('Open tag ' + openTag.tag + ' on line ' + openTag.line + ' does not have a corresponding closing tag.');
              return;
          }
          $('#unclosed-tag-finder-results').text('Success: No unclosed tags found.');
      });
    </script>
  `,
});
