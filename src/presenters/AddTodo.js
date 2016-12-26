/**
 * Created by kazanture on 12/26/16.
 */


let AddTodo = ({dispatch}) => {
    let input;
    return(
        <div>
    <input ref={node => {
        input=node;
    }} />
    <button onClick={()=> {
        dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text: input.value
        })
        input.value = '';
    }}>
    Add Todo
    </button>
            </div>
    );
};
AddTodo = connect ()(AddToDo);