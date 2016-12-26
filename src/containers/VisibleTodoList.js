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
          dispatch({
              type: 'TOGGLE_TODO',
              id
          })
        }
  } ;
};

const { connect } = ReactRedux;
const VisibleTodoList = connect (
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
