import './title.css'

function Title({text, alignment, fontSize=2}) {
    return (
        <h1 
            className="title"
            style={{
                textAlign: alignment,
                fontSize: `${fontSize}rem`

            }} 
        >
                {text}
        </h1>
    )
} 

export default Title