export default function validateInfo(values){
    let errors={}
    
    if(!values.ticket_no){
        errors.ticket_no="ticket number required";
    }

    return errors;
}
