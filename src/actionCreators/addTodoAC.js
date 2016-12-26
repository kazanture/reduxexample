/**
 * Created by kazanture on 12/26/16.
 */
let nextTodoId = 0;
const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text

    };
};