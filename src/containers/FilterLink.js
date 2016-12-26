/**
 * Created by kazanture on 12/26/16.
 */

const mapStateToProps = (
    state,
    ownProps
) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchToProps = (
    dispatch,
    ownProps
) => {
    return {
        onClick: () => {
            dispatch(
                setVisibilityFilter(ownProps.filter)
            )
        }
    };
}

const FilterLink = connect (
    mapStateToProps,
    mapDispatchToProps
)(Link);