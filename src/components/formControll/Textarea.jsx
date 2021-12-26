import classes from './FormControll.module.css'

const Textarea = ({label, value, setValue}) => {
    return (
        <>
            <label className={classes.label}>{label}</label>
            <textarea value={value} className={classes.textField} onChange={e => setValue(e.target.value)} placeholder="write message" />
        </>
    )
}

export default Textarea
