import './paragraph.css'

function Paragraph({text, alignment, fontSize=1+'rem'}) {
    return (
        <p 
            className={"paragraph"}
            style={{textAlign: alignment, fontSize: fontSize+'rem'}} 
        >
                {text}
        </p>
    )
}

export default Paragraph