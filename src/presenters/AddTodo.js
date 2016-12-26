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
        dispatch(addTodo(input.value));
        input.value = '';
    }}>
    Add Todo
    </button>
            </div>
    );
};
AddTodo = connect ()(AddToDo);