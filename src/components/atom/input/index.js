import 'bootstrap';

export function Input(props){
    let {className, id, type, onclick, placeholder, disable, databstoggle, databstarget, For, databsdismiss,  ...rest} = props;// destructuring props
    return(
        <input 
        type={type}
        id={id}
        placeholder={placeholder}
        for={For}
        className={className}
        >
            {props.children}
        </input>
        
    )
}