import classes from "../../Profile/EditableSpan/EditableSpan.module.css";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";


type EditableSpanPropsType = {
    status: string
    updateStatus: (status: any) => void
}
export const EditableSpan = (props: EditableSpanPropsType) => {
    let [state, setState] = useState(true)
    let [value, setValue] = useState(props.status)
    let clickOnSpan = () => {
        setState(false)
    }
    let onBlurInput = () => {
        setState(true)
        props.updateStatus(value)
    }
    let onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        // props.updateStatus(value)
        // console.log(props.status)
    };

    return (
        <>
            {state ?
                <span className={classes.status} onDoubleClick={clickOnSpan}>{value}</span>
                :
                <input autoFocus
                       onBlur={onBlurInput}
                       className={classes.inputOnProfile}
                       onChange={onChangeInput}
                       value={value}
                />}

        </>
    )
}