/**
 * Created by kazanture on 12/26/16.
 */

const mapStateToProps=(state)=> {
    return {
        todos:  getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
      onTodoClick: id => {
          dispatch(toggleTodo(id))
        }
  } ;
};

const { connect } = ReactRedux;
const VisibleTodoList = connect (
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
