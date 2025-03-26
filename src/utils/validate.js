//It should return error message if email, password doesnt match the regex. If it follow the protocol return null
export const validateData =(email, password) => {
    const errorBox = [];

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) errorBox.push("Email id is not valid");
    if(!isPasswordValid) errorBox.push("Password is not valid");

    return errorBox.length > 0 ? errorBox : null;

}