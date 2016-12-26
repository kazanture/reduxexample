/**
 * Created by kazanture on 12/26/16.
 */
class Provider extends Component {
    getChildContext() {
        return {
            store: this.props.store
        };
    }
    render() {
        return this.props.children;
    }
}

Provider.childContextTypes = {
    store: React.PropTypes.object
};