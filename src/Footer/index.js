import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp  } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="footer">            
            <p>Copyright © 2025. Desenvolvido por Saulo Pavanello</p>
            <nav>
                <ul>
                    <li>
                        <a 
                            href='https://github.com/MxSGameJPS' 
                            target="_blank" 
                            rel="noreferrer">
                                <FaGithub 
                                    size={30} 
                                    color='#fff'
                                />
                        </a>
                    </li>
                    <li>
                        <a 
                            href='https://www.linkedin.com/in/saulopavanello/' 
                            target="_blank" 
                            rel="noreferrer">
                                <FaLinkedin 
                                    size={30} 
                                    color='#fff'
                                />
                        </a>
                    </li>
                    <li>
                        <a 
                            href='https://www.instagram.com/mxsgamejps/' 
                            target="_blank" 
                            rel="noreferrer">
                                <FaInstagram 
                                    size={30} 
                                    color='#fff'
                                />
                        </a>
                    </li>
                    <li>
                        <a 
                            href='https://api.whatsapp.com/send?phone=5551993392983&text=Quero%20ter%20um%20site' 
                            target="_blank" 
                            rel="noreferrer">
                                <FaWhatsapp  
                                    size={30} 
                                    color='#fff'
                                />
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Footer;