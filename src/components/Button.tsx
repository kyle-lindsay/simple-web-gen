function Button(props: any) {
    let element;
    if (props.type === "link") {
        element = <a href={props.url} className="button">{props.text}</a>
    } else if (props.type === "action") {
        element = <a onClick={props.action} className="button">{props.text}</a>
    }

    return(element);
}

export default Button;