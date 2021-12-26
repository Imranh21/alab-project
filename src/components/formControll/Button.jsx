import classes from './FormControll.module.css'

const Button = ({text}) => {
    return (
        <button className={classes.btn}>{text}</button>
    )
}

export default Button
