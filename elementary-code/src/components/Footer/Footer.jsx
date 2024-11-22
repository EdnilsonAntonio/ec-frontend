import './footer.css'
import Logo from '../../assets/branding/logo.png'
import Paragraph from '../UI/Paragraph/Paragraph'

function Footer() {
    return (
        <footer className='footer'>
            <div className="main-footer">
                <div className="row mt-0">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="footer-branding">
                            <img src={Logo} alt="Logo" width="170" />
                            <Paragraph
                                text="Mantida por uma comunidade de código aberto, a educação de codificação de alta qualidade."
                            />
                            <div className="social-media">
                                <a href="#"><i className="fi fi-brands-github"></i></a>
                                <a href="#"><i className="fi fi-brands-discord"></i></a>
                                <a href="#"><i className="fi fi-brands-facebook"></i></a>
                                <a href="#"><i className="fi fi-brands-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="row mt-0">
                            <div className="col-lg-3 col-md-3 col-sm-6 footer-links">
                                <div className="about-us">
                                    <h5>Sobre nós</h5>
                                    <ul>
                                        <li><a href="#">Sobre</a></li>
                                        <li><a href="#">Equipa</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Histórias de sucesso</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 footer-links mobile-right">
                                <div className="support">
                                    <h5>Suporte</h5>
                                    <ul>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Contribua</a></li>
                                        <li><a href="#">Contacte-nos</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 footer-links">
                                <div className="guides">
                                    <h5>Guias</h5>
                                    <ul>
                                        <li><a href="#">Guias da comunidade</a></li>
                                        <li><a href="#">Guias de instalação</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 footer-links mobile-right">
                                <div className="Legalidade">
                                    <h5>Legalidade</h5>
                                    <ul>
                                        <li><a href="#">Termos</a></li>
                                        <li><a href="#">Privacidade</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="separator">
                <hr />
            </div>
            <div className="copyright">
                <p>&copy;2024 Elementary Code. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer