import React, {useState} from 'react';
import {InputModel, InputType} from "./Input.model";
import styles from "./Input.module.scss"

const Input = (input: InputModel) => {
    const EMAIL_REGEX =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const NAME_REGEX = /.{3,120}/;
    const SUBJECT_REGEX = /^.{0,120}$/;
    const MESSAGE_REGEX = /.{1,420}/;

    const [style, setStyle] = useState(styles.input)

    let regex: RegExp;
    let placeholder: string;

    switch (input.type) {
        case InputType.email:
            regex = EMAIL_REGEX;
            placeholder = "Your Email"
            break;
        case InputType.name:
            regex = NAME_REGEX;
            placeholder = "Your Name"
            break;
        case InputType.subject:
            regex = SUBJECT_REGEX;
            placeholder = "Subject"
            break;
        case InputType.message:
            regex = MESSAGE_REGEX;
            placeholder = "Message"
    }

    const validate = (value: string) => {
        if (regex.test(value)) {
            setStyle(styles.inputValidated);
            input.callbackValidate({
                valid: true,
                value: value
            })
        } else {
            setStyle(styles.inputNotValidated);
            input.callbackValidate({
                valid: false,
                value: value
            })
        }
    }

    return (
        <div className={input.wrapperClass}>
            {input.type != InputType.message ?
                <input className={style} placeholder={placeholder}
                       onChange={event => validate(event.target.value)}/> :
                <textarea rows={15} className={style} placeholder={placeholder}
                          onChange={event => validate(event.target.value)}/>
            }
        </div>
    );
};

export default Input;