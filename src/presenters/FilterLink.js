/**
 * Created by kazanture on 12/26/16.
 */


const FilterLink = ({
    filter,
    currentFilter,
    children,
    onClick
}) => {
    if(filter===CurrentFilter) {
        return <span>{children}</span>
    }
    return (
        <a href='#'
           onClick={e => {
               e.preventDefault();
               onClick(filter);
           }}
           >
            {children}
            </a>
        );
    };

