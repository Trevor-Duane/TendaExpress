import { showMessage } from "react-native-flash-message";

const showError = (message) => {
    showMessage({
        type: 'danger',
        icon: 'danger',
        backgroundColor: "black",
        message
    })
}

const showSuccess = (message) => {
    showMessage({
        type: 'success',
        icon: 'success',
        backgroundColor: "#14A44D",
        message
    })
}


export {showError, showSuccess}
