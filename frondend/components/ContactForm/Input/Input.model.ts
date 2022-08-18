export interface InputModel {
    type: InputType;
    wrapperClass?: string;
    callbackValidate?: any;
}

export enum InputType {
    "email",
    "name",
    "subject",
    "message",
}

export interface InputInfo {
    valid: boolean;
    value: string;
}
