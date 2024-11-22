import './alert.css'

function Alert({message, type}) {
    return (
        <div className={`alert alert-${type} text-center`} role="alert">
            {message}
        </div>
    )
}

export default Alert