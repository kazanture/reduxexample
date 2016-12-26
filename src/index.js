
const store = createStrore(todoApp);
const { Component } = React;


const render = () =>{
    ReactDOM.render(
        <TodoApp
            {...store.getState()}
        />,
        document.getElementById('root')
    );
};
store.subscribe(render);
render();