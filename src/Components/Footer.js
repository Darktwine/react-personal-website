import { faHome, faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer style={{backgroundColor: '#101909', color: 'white', paddingTop: '40px', paddingBottom:'40px'}}>
            <div style={{color: 'gray', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
                <FontAwesomeIcon icon={faHome} size="2x" />
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                <FontAwesomeIcon icon={faGithub} size="2x" />
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                <FontAwesomeIcon icon={faFile} size="2x" />
            </div>
            <h2 style={{color: 'gray', marginTop: '25px', textAlign: 'center'}}>Kevin | <span style={{fontSize: '25px'}}>&copy;</span> 2021</h2>
        </footer>
    )
}

export default Footer;
