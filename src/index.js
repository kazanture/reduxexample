const {createStore} = Redux;
const {Component} = React;
const { Provider } = ReactRedux;

ReactDOM.render(
    <Provider store={createStore(todoApp)}>
        <TodoApp/>
    </Provider>,
    document.getElementById('root')
);