import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <>
        <div className='p-2
        '>
            <a href='https://twitter.com/shyynux'>
            <FontAwesomeIcon icon={faXTwitter} className='px-6 
            hover:text-purple-400 text-3xl
            '/>
            </a>
            <a href='https://github.com/shyynux'>
            <FontAwesomeIcon icon={faGithubAlt} className='px-6
            hover:text-purple-400 text-3xl
            ' />
            </a>
        </div>
        </>
    );
}

export default Footer;