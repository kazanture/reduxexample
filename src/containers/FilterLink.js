/**
 * Created by kazanture on 12/26/16.
 */
class FilterLink extends Component {
    componentDidMount() {
        const {store} = this.props;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const props = this.props;
        const {store} = props;
        const state = store.getState();

        return (
            <Link
                active={
                    props.filter === state.visibilityFilter
                }
                onClick={ () =>
                    store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter: props.filter
                    })
                }
            >
                {props.children}
            </Link>
        );
    }
}