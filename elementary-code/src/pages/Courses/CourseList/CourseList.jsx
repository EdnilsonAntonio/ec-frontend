import './courselist.css'
import api from '../../../services/api.js'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/UI/Button/Button.jsx';

function CourseList() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]) // State dos cursos

    // Buscar os cursos do backend
    async function getCourses() {
        const response = await api.get('/courses');
        const coursesWithLessonCount = response.data.map(course => {
            // Contar o total de lições no curso
            const lessonCount = course.modules.reduce((totalLessons, module) => {
                return totalLessons + module.lessons.length;
            }, 0)

            // Contar o total de lições normais no curso
            const normalLessonCount = course.modules.reduce((totalLessons, module) => {
                return totalLessons + module.lessons.filter((lesson) => lesson.type === 'Normal').length;
            }, 0)

            // Contar o total de projetos no curso
            const projectCount = course.modules.reduce((totalLessons, module) => {
                return totalLessons + module.lessons.filter((lesson) => lesson.type === 'Project').length
            }, 0)

            // Retornar o curso com o número de lições adicionado
            return { ...course, lessonCount, normalLessonCount, projectCount};
        })
        console.log(coursesWithLessonCount) // Mostrar os cursos com o número de lições
        console.log(response.data)
        setCourses(coursesWithLessonCount);
        return response.data;
    }

    // Carregar os cursos na tela
    useEffect(() => {
        getCourses()
    }, [])

    function onCourseClick(course) {
        const query = new URLSearchParams();
        query.set('courseName', course.name);
        query.set('courseId', course.id);
        // Redirecionar para a página do curso
        navigate(`/course-page?${query.toString()}`);
    }

    return (
        <div className="course-list mt-5 d-flex flex-column gap-4">
            {courses.map((course) => (
                <div key={course.id} className="course-card d-flex justify-content-between align-items-center px-3 py-4 rounded-2">
                    <div className="course-information">
                        <h3>{course.name}</h3>
                        <div className="course-features d-flex gap-4">
                            <span className='d-flex gap-1'>
                                <i className="fi fi-rr-book-alt"></i>
                                {course.normalLessonCount} aulas
                            </span>
                            <span className='d-flex gap-1'>
                                <i className="fi fi-rr-tools"></i>
                                {course.projectCount} projetos
                            </span>
                        </div>
                    </div>
                    <Button
                        text="Ver curso"
                        type="primary"
                        onClick={() => onCourseClick(course)}
                    />
                </div>
            ))}
        </div>
    )
}

export default CourseList