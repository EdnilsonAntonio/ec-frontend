import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home/Home.jsx'
import Courses from './pages/Courses/Courses.jsx'
import './index.css'
import CoursePage from './pages/CoursePage/CoursePage.jsx';
import LessonPage from './pages/LessonPage/LessonPage.jsx';
import CourseConclusion from './pages/CourseConclusion/CourseConclusion.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import HelpTheProject from './pages/HelpTheProject/HelpTheProject.jsx';

const router = createBrowserRouter([
  {
    // Home
    path: "/",
    element: <Home/>,
  },
  {
    // Courses
    path: "/courses",
    element: <Courses/>,
  },
  {
    // Course Page
    path: "/course-page",
    element: <CoursePage/>,
  },
  {
    // Lesson Page
    path: "/lesson-page",
    element: <LessonPage/>,
  },
  {
    // Course Conclusion
    path: "/course-conclusion",
    element: <CourseConclusion/>,
  },
  {
    // About Us
    path: "/about-us",
    element: <AboutUs/>,
  },
  {
    // Help The Project
    path: "/help-the-project",
    element: <HelpTheProject/>,
  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
