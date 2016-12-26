/**
 * Created by kazanture on 12/26/16.
 */
let nextTodoId = 0;
const TodoApp = ({store}) => (
    <div>
        <AddTodo store={store}/>
        <VisibleTodoList store={store}/>
        <Footer store={store}/>
    </div>
)
