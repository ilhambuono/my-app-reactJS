import 'bootstrap';

export function Label(props){
    let {className, id, onclick, disable, databstoggle, databstarget, For, databsdismiss,  ...rest} = props;// destructuring props
    return(
        <label 
        for={For}
        className={className}
        >
            {props.children}
        </label>
        
    )
}