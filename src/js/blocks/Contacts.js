import { Zoom } from 'react-reveal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Contacts(props) {
    return (
        <Zoom>
            <div className="contacts">
                Контакты:
                <a href='mailto:kovalmaximv@gmail.com' className='contacts-item'>
                    <FontAwesomeIcon icon={faInbox} />
                    <span className='contacts-span'>kovalmaximv@gmail.com</span>
                </a>
                <a href='https://t.me/maximkovalv' className='contacts-item'>
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <span className='contacts-span'>Telegram</span>
                </a>
            </div>
        </Zoom>
    );
}

export default Contacts;