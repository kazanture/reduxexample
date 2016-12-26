/**
 * Created by kazanture on 12/26/16.
 */
const TodoList = ({
    todos,
    onTodoClick
}) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
            onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
)