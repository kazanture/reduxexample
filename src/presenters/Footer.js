/**
 * Created by kazanture on 12/26/16.
 */
const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink
            filter='SHOW_ALL'
        >
            All
        </FilterLink>
        <FilterLink
            filter='SHOW_ACTIVE'
        >
            Active
        </FilterLink>
        <FilterLink
            filter='SHOW_COMPLETED'
        >
            Completed
        </FilterLink>
    </p>
)