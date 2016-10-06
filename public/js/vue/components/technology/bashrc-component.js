Vue.component('bashrc-component', {
  template:
  `
  <h1> ~/.bashrc </h1>

      <!-- Update syntax -->
      <code> vim ~/.bashrc && source ~/.bashrc </code>

      <!-- .bashrc file -->
      <pre class="language-bash">
alias c='clear'
alias add='git add -A'
alias pushm='git pull origin master && git push origin master'
alias pushd='git pull origin dev && git push origin dev'
alias apushm='git add -A && git commit -m "Updates to personal project using alias" && git pull origin master && git push origin master'
      </pre>
  `,
});
