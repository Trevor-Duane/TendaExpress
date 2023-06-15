import validator from 'is_js';

const checkEmpty = (val, key) => {
    if(validator.empty(val.trim())) {
        return `${key}`;
    } else {
        return '';
    }
}

const checkMinLength = (val, minLength, key) => {
    if(val.trim().length < minLength) {
        return `Please enter valid ${key}`
    } else {
        return '';
    }
}

export default function (data) {

    const { email, phonenumber, username, address, password, password_confirmation, reset_token } = data

    if(email !== undefined){
        let emptyValidationText = checkEmpty(email, 'Please enter your email')
        if(emptyValidationText !== '') {
            return emptyValidationText;
        }
        else {
            if(!validator.email(email)){
                return 'Please enter a valid email'
            }
        } 
    }

    if(phonenumber !== undefined){
        let emptyValidationText = checkEmpty(phonenumber, 'Please enter your phonenumber')
        if(emptyValidationText !== '') {
            return emptyValidationText;
        }
        else {
            let minLengthValidation = checkMinLength(phonenumber, 10, 'phonenumber')
            if(minLengthValidation !== ''){
                return minLengthValidation
           }
        }
    } 
    if(reset_token !== undefined){
        let emptyValidationText = checkEmpty(reset_token, 'Please enter the reset token')
        if(emptyValidationText !== '') {
            return emptyValidationText;
        }
        else {
            let minLengthValidation = checkMinLength(reset_token, 4, 'reset_token')
            if(minLengthValidation !== ''){
                return minLengthValidation
           }
        }
    }

    if(username !== undefined){
        let emptyValidationText = checkEmpty(username, 'Please enter your username')
        if(emptyValidationText !== '') {
            return emptyValidationText;
        }
        else {
            let minLengthValidation = checkMinLength(username, 3, 'username')
            if(minLengthValidation !== ''){
                 return minLengthValidation
            }
        }
    } 
   
    if(address !== undefined){
        let emptyValidationText = checkEmpty(address, 'Please enter your address')
        if(emptyValidationText !== '') {
            return emptyValidationText;
        }
        else {
            let minLengthValidation = checkMinLength(address, 3, 'address')
            if(minLengthValidation !== ''){
                 return minLengthValidation
            }
        } 
    }

    if(password !== undefined){
        let emptyValidationText = checkEmpty(password, 'Please enter your password')
        if(emptyValidationText !== '') {
            return emptyValidationText;
        }
        else {
            let minLengthValidation = checkMinLength(password, 6, 'password')
            if(minLengthValidation !== ''){
                return minLengthValidation
           }
        }
    } 

    if(password_confirmation !== undefined){
        let emptyValidationText = checkEmpty(password_confirmation, 'Please confirm your password')
        if(emptyValidationText !== '') {
            return emptyValidationText;
        }
        else {
            let minLengthValidation = checkMinLength(password_confirmation, 6, 'password')
            if(minLengthValidation !== ''){
                return minLengthValidation
           }
        }
    } 

    
}