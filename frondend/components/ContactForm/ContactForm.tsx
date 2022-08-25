import React, {SyntheticEvent, useState} from 'react';
import Input from "./Input/Input";
import {InputType} from "./Input/Input.model";
import styles from "./ContactForm.module.scss"
import getUrl from "../../api";
import {InputInfo} from "./Input/Input.model";


const ContactForm = () => {
    const [emailInfo, setEmailInfo] = useState<InputInfo>({valid: false, value: ""})
    const [nameInfo, setNameInfo] = useState<InputInfo>({valid: false, value: ""})
    const [subjectInfo, setSubjectInfo] = useState<InputInfo>({valid: false, value: ""})
    const [messageInfo, setMessageInfo] = useState<InputInfo>({valid: false, value: ""})

    const inputs: InputInfo[] = [emailInfo, nameInfo, subjectInfo, messageInfo];

    const [styleForm, setStyleForm] = useState<string>(styles.form);
    const [styleStatus, setStyleStatus] = useState<string>(styles.statusHidden)

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        if (inputs.every(input =>
            input.valid
        )) {
            const data = {
                email: emailInfo.value,
                name: nameInfo.value,
                subject: subjectInfo.value,
                body: messageInfo.value,
            }

            await fetch(getUrl("/message/create"), {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            })

            setStyleStatus(styles.status)
            setTimeout(() => {
                setStyleStatus(styles.statusHidden);
            }, 3000);
        } else {
            setStyleForm(styles.formNotValidated)
            setTimeout(() => {
                setStyleForm(styles.form);
            }, 300);
        }
    }
    return (
        <form action="" className={styleForm}>
            <Input type={InputType.name}
                   callbackValidate={(phoneInfo: InputInfo) => setNameInfo(phoneInfo)}
            />
            <Input type={InputType.email}
                   callbackValidate={(emailInfo: InputInfo) => setEmailInfo(emailInfo)}
            />
            <Input type={InputType.subject} wrapperClass={styles.subject}
                   callbackValidate={(subjectInfo: InputInfo) => setSubjectInfo(subjectInfo)}
            />
            <Input type={InputType.message} wrapperClass={styles.message}
                   callbackValidate={(messageInfo: InputInfo) => setMessageInfo(messageInfo)}
            />
            <p className={styleStatus}>Your message has been sent!</p>
            <div className={styles.submitWrapper}>
                <input className={styles.submit} type="submit" value="Submit" onClick={handleSubmit}/>
            </div>
        </form>
    );
};

export default ContactForm;