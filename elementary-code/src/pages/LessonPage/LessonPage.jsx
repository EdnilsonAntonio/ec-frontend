import { useSearchParams, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import HelpUs from '../../components/HelpUs/HelpUs'
import Navbar from '../../components/Navbar/Navbar'
import './lessonpage.css'
import Title from '../../components/UI/Title/Title'
import { useState, useEffect } from 'react'
import api from '../../services/api'
import PageControls from '../PageControls/PageControls'

function LessonPage() {

    const navigate = useNavigate()

    // Obter as infomações da URL
    const [searchParams] = useSearchParams()
    const courseName = searchParams.get('courseName')
    const lessonId = searchParams.get('lessonId')
    const lessonIndex = searchParams.get('lessonIndex')
    const courseId = searchParams.get('courseId')

    // State do Lesson
    const [lesson, setLesson] = useState()

    // Obter as informações do lesson
    async function getLesson() {
        const response = await api.get(`/lessons/${lessonId}`)
        setLesson(response.data)
        console.log(response.data)
    }

    // Carregar as informações na tela
    useEffect(() => {
        if (lessonId) {
            getLesson()
        }
    }, [lessonId])

    // Próxima lição
    const nextLessonIndex = parseInt(lessonIndex) + 1

    async function nextLesson() {
        try {
            // Buscar a próxima lição pelo índice
            const response = await api.get(`/courses/${courseId}/modules/${nextLessonIndex}`)
            // Verificar se a próxima lição existe
            if (response.data) {
                // Atualizar a URL com as informações da próxima lição
                navigate(`/lesson-page?courseName=${courseName}&lessonId=${response.data.id}&lessonIndex=${nextLessonIndex}`)
                // Atualiza a página para começar sempre no topo
                location.reload()
            }
        }
        catch (error) {
            console.error(error)
            courseConclusion() // Se a próxima lição não existir, redireciona para a página de conclusão de curso
        }

    }

    // Página de conclusão do curso
    function courseConclusion() {
        const query = new URLSearchParams()
        query.set('courseName', courseName)
        navigate(`/course-conclusion?${query.toString()}`)
    }

    // Ver curso
    function coursePage() {
        const query = new URLSearchParams();
        query.set('courseName', courseName);
        query.set('courseId', courseId);
        // Redirecionar para a página do curso
        navigate(`/course-page?${query.toString()}`);
    }

    // Mostrar as informações da lição
    if (!lesson) return null


    return (
        <div className="lesson-page">
            <Navbar />
            <main className='lesson-page-main py-5 px-5 d-flex flex-column align-items-center'>
                <Title
                    text={courseName}
                />
                <section className="lesson-overview w-100 px-5 d-flex flex-column">
                    <div className="lesson-title mt-4 justify-content-start">
                        <span className='d-flex gap-3'>
                            {lesson.type === 'Normal'
                                ? <i className="fi fi-rr-book-alt"></i>
                                : <i className="fi fi-rr-tools"></i>
                            }
                            <h3>{lesson.title}</h3>
                        </span>
                    </div>
                    <div className="lesson-content" dangerouslySetInnerHTML={{ __html: lesson.content }}>
                    </div>
                    <PageControls
                        nextLesson={nextLesson}
                        coursePage={coursePage}
                    />
                </section>
            </main>
            <HelpUs />
            <Footer />
        </div>
    )
}

export default LessonPage