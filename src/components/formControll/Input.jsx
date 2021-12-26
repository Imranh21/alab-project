import classes from './FormControll.module.css'

const Input = ({label, value, setValue, type}) => {

    return (
        <div className={classes.formControl}>
            <label className={classes.label}>{label}</label>
            <input value={value} type={type} className={classes.inputField} onChange={e => setValue(e.target.value)}/>
        </div>
    )
}

export default Input
