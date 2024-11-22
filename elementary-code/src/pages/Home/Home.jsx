import Footer from '../../components/Footer/Footer'
import HelpUs from '../../components/HelpUs/HelpUs'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from'react-router-dom';
import { useEffect } from 'react';
import './home.css'
import Main from './Main/Main'

function Home() {

  // Garantir que o usuário só entra aqui se não estiver logado
  const isLoggedIn = !!localStorage.getItem('token')
  const navigate = useNavigate();

  function stayInDashboard() {
      if (isLoggedIn) {
          navigate('/dashboard');
      }
  }

  useEffect(() => {
      stayInDashboard();
  }, []);

  return (
    <div className="home">
      <Navbar/>
      <Main/>
      <HelpUs/>
      <Footer/>
    </div>
  )
}

export default Home