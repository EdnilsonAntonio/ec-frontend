import Button from '../../../components/UI/Button/Button'
import './modules.css'
import { useState, useEffect } from 'react'
import api from '../../../services/api.js'
import { useNavigate } from 'react-router-dom'
import Title from '../../../components/UI/Title/Title.jsx'
import Paragraph from '../../../components/UI/Paragraph/Paragraph.jsx'

function Modules({courseId, courseName}) {

    const[modules, setModules] = useState([])
    const navigate = useNavigate()

    // Buscar todos os módulos do curso pelo ID
    async function getModules() {
        const response = await api.get(`/courses/${courseId}/modules`);
        setModules(response.data);
        console.log(response.data);
        return response.data;
    }

    // Carregar os módulos da tela
    useEffect(() => {
        getModules()
    }, [])

    function onLessonClick(lesson, module) {
        // Redirecionar para a página da lição
        const query = new URLSearchParams();
        query.set('lessonId', lesson.id);
        query.set('lessonIndex', lesson.index);
        query.set('moduleId', module.id);
        query.set('courseName', courseName);
        query.set('courseId', courseId);
        navigate(`/lesson-page?${query.toString()}`);
    }

    return (
        <div className="modules w-100 d-flex flex-column align-items-center">
            {modules.map((module) => (
                <div key={module.id} className="module mt-5 p-3 rounded-3">
                    <div className="module-title border-bottom border-dark pb-2">
                        <h3>{module.name}</h3>
                    </div>
                    <div className="module-lessons">
                        {module.lessons.map((lesson) => (
                            <div key={lesson.id} className="lesson d-flex justify-content-between py-3 align-items-center">
                                <div className="lesson-title d-flex gap-2">
                                    {lesson.type === 'Project'
                                        ? <i className="fi fi-rr-tools"></i>
                                        : <i className="fi fi-rr-book-alt"></i>
                                    }
                                    <h6 className='mb-0'>{lesson.title}</h6>
                                </div>
                                <Button
                                    text="Ver lição"
                                    type="primary"
                                    onClick={() => onLessonClick(lesson, module)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {modules?.length === 0 && (
                <div className="text-center mt-5 d-flex flex-column align-items-center">
                    <Title
                        text="Este curso ainda não tem aulas!"
                    />
                    <Paragraph
                        text="Estamos a trabalhar para adicionar aulas para este curso. Enquanto isso, veja os outros cursos."
                    />
                </div>
            )}
        </div>
    )
}

export default Modules