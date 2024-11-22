import Button from '../../../../components/UI/Button/Button'
import Title from '../../../../components/UI/Title/Title'
import './alluneed.css'
import Course from './Course/Course'

function AllUNeed() {
    return (
        <div className="all-uneed d-flex flex-column align-items-center">
            <Title 
                text="Tudo o que precisa aprender" 
                alignment="center"
            />
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-end mobile">
                    <Course
                        icon="rr-code-simple"
                        title="HTML"
                        link="https://www.w3schools.com/html/"
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center  mobile">
                    <Course
                        icon="rr-graphic-style"
                        title="CSS"
                        link="https://www.w3schools.com/css/"
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-start mobile">
                    <Course
                        icon="rr-code-compare"
                        title="JAVASCRIPT"
                        link="https://www.w3schools.com/js/"
                    />
                </div>
            </div>
            <div className="row sr">
                <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-end mobile">
                    <Course
                        icon="rr-react"
                        title="REACT"
                        link="https://www.w3schools.com/sql/"
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center mobile">
                    <Course
                        icon="rr-terminal"
                        title="NODE JS"
                        fontSize={1.3}
                        link="https://nodejs.org/en/"
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-start mobile">
                    <Course
                        icon="rr-file-code"
                        title="BASE DE DADOS"
                        fontSize={1.3}
                        link="https://reactjs.org/"
                    />
                </div>
            </div>
            <div className="row sr">
                <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-end mobile">
                    <Course
                        icon="rr-lock-hashtag"
                        title="PHP"
                        link="https://github.com/"
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center mobile">
                    <Course
                        icon="brands-github"
                        title="GIT HUB"
                        fontSize={1.3}
                        link="https://slack.com/intl/pt-br/"
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-start mobile">
                    <Course
                        icon="rr-briefcase"
                        title="MERCADO DE TRABALHO"
                        fontSize={1}
                        link="https://www"
                    />
                </div>
            </div>
            <Button text="Ver cursos" type="primary" link={'/courses'}/>
        </div>
    )
}

export default AllUNeed