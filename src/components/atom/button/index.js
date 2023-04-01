import 'bootstrap';

export function Button(props){
    let {className, id, onclick, tipe, disable, databstoggle, databstarget, databsdismiss, ...rest} = props;// destructuring props
    return(
        <button type={tipe}
        data-bs-toggle={databstoggle}
        data-bs-target={databstarget}
        data-bs-dismiss={databsdismiss}
        disabled={disable}
        className={className} 
        id={id}
        onClick = {onclick}
        style={{...rest}}
        >
            {props.children}
        </button>
        
    )
}