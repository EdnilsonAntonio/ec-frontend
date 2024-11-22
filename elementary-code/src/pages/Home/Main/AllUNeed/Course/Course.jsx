import './course.css'

function Course({icon, title, link, fontSize=10+'rem'}) {
    return (
        <a className="course" href={link}>
            <i className={`fi fi-${icon}`}></i>
            <h3 style={{fontSize: fontSize+'rem'}}>{title}</h3>
        </a>
    )

}

export default Course