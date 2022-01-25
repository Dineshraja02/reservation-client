export default function validateInfo(values){
    let errors={}
    
    if(!values.name){
        errors.name="name required";
    }

    if(!values.age){
        errors.age="age required";
    }
    if(!values.gender){
        errors.gender="select gender";
    }

    if(!values.birth){
        errors.birth="select birth";
    }
    return errors;
}
