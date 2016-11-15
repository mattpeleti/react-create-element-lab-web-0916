//Code React element here
var meInReact = React.createElement('div', {className: "me"},
  React.createElement('h1', {}, "An Awesome Person"),
  React.createElement('p', {}, "Who is learning React"),
  React.createElement('ul', {className: "me_interests"},
  [
    React.createElement('li', {key: "int1"}, "JavaScript"),
    React.createElement('li', {key: "int2"}, "React"),
    React.createElement('li', {key: "int3"}, "Movies"),
    React.createElement('li', {key: "int4"}, "Ice cream")
  ])
);



ReactDOM.render(
  meInReact,
  document.getElementById('main')
);
