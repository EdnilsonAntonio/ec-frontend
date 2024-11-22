import './button.css'

function Button({text, link, type, icon="invisible", onClick}) {
    return (
        <a href={link} onClick={onClick} className={`button-${type}`}>
            {text} <i className={`fi fi-rr-arrow-right ${icon} btn-icon`}></i> 
        </a>
    )
}

export default Button