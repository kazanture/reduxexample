/**
 * Created by kazanture on 12/26/16.
 */
const AddTodo = ({
    onAddClick
}) => {
    let input;
    return(
        <div>
    <input ref={node => {
        input=node;

    }} />
    <button onClick={()=> {

        onAddClick(input.value);
        input.value = '';
    }}>
    Add Todo
    </button>
            </div>
    );
};