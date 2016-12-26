/**
 * Created by kazanture on 12/26/16.
 */
const AddTodo = ({store}) => {
    let input;
    return(
        <div>
    <input ref={node => {
        input=node;
    }} />
    <button onClick={()=> {
        store.dispatch({
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