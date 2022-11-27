export default function validationInfo(values){
    let errors = {}

    //Email
    if (!values.email) {
        errors.email = "Email required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email adress is invalid"
    }

    //Name
    if(!values.name.trim()) {
        errors.name = "Name is required"
    }

    if(!values.wnum){
        errors.wnum = 'Whatapp Number is required '
    }

    if(!values.radio){
        errors.radio = 'Required to select one'
    }else{
        console.log(values.radio)
    }

    return errors;
}