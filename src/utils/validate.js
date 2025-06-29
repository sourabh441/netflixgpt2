export const ChheckValidData =(email, password,fullName)=>{

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    // const isFullNameValid = /^[A-Za-z\s]{2,}$/.test(fullName);


    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "Password is not valid"
    // if(!isFullNameValid) return "full Name is not valid"

    return null






} 