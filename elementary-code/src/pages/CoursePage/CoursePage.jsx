import './coursepage.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import HelpUs from '../../components/HelpUs/HelpUs'
import Footer from '../../components/Footer/Footer'
import Title from '../../components/UI/Title/Title'
import Modules from './Modules/Modules'
import Button from '../../components/UI/Button/Button'

function CoursePage() {
    // Obter os parâmetros da URL para pegar o nome do curso e o ID do curso
    const [searchParams] = useSearchParams()
    const courseName = searchParams.get('courseName')
    const courseId = searchParams.get('courseId')

    const navigate = useNavigate()

    function coursePage() {
        // Redirecionar para a página do curso
        navigate(-1);
    }

    return (
        <div className='course-page'>
            <Navbar/>
            <main id='course-page-main' className='d-flex flex-column align-items-center gap-4'>
                <Title
                    text={courseName}
                    alignment="center"
                />
                <Modules courseId={courseId} courseName={courseName}/>
                <Button
                    type="secondary"
                    text="Ver cursos"
                    onClick={coursePage}
                />
            </main>
            <HelpUs/>
            <Footer/>
        </div>
    )
}

export default CoursePage