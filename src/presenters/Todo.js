/**
 * Created by kazanture on 12/26/16.
 */
const Todo=({
    onClick,
    completed,
    text
}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration:
                completed ?
                    'line-through' :
                    'none'

        }}>
        {text}
    </li>
);