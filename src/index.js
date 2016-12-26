const {createStore} = Redux;
const {Component} = React;


ReactDOM.render(
    <TodoApp store={createStore(todoApp)}/>,
    document.getElementById('root')
);