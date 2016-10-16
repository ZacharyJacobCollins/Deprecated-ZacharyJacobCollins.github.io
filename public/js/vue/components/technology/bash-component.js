Vue.component('bash-component', {
  template:
  `
    <h1>Bash</h1>

    <h2s> ~/.bashrc </h2>

        <!-- Update syntax -->
        <code> vim ~/.bashrc && source ~/.bashrc </code>

        <!-- .bashrc file -->
        <pre class="language-bash">
  alias c='clear'
  alias add='git add -A'
  alias pushm='git pull origin master && git push origin master'
  alias pushd='git pull origin dev && git push origin dev'
  alias apushm='git add -A && git commit -m "Updates to personal project using alias" && git pull origin master && git push origin master'
  alias apushd='git add -A && git commit -m "Updates to personal project using alias" && git pull origin dev && git push origin dev'
  alias goabyss='cd $GOPATH/src/github.com/ZacharyJacobCollins/abyss && go install && $GOPATH/bin/./abyss.exe'
        </pre>
  `,
});
