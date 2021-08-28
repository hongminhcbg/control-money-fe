import classes from './Avatar.module.css';
function Avatar(){
    return (
        <svg className={classes.avatar}>
            <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red"> </circle>
        </svg>
    )
}

export default Avatar;