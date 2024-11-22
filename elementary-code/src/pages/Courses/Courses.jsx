import Footer from '../../components/Footer/Footer'
import HelpUs from '../../components/HelpUs/HelpUs'
import Navbar from '../../components/Navbar/Navbar'
import Paragraph from '../../components/UI/Paragraph/Paragraph'
import Title from '../../components/UI/Title/Title'
import CourseList from './CourseList/CourseList'
import './courses.css'

function Courses() {
    return (
        <div className='courses'>
            <Navbar/>
            <main id='courses-main' className='py-5 px-3 d-flex flex-column align-items-center'>
                <Title
                    text="Os nossos cursos"
                    alignment="center"
                />
                <Paragraph
                    text="Conheça o nosso currículo vasto de cursos que irão te levar para o próximo nível da programação. Se está a começar agora, aconselhamos a fazer os cursos por ordem."
                    alignment="center"
                />
                <CourseList/>
            </main>
            <HelpUs/>
            <Footer/>
        </div>
    )
}

export default Courses