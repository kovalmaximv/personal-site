import { Zoom } from 'react-reveal';

function About(props) {
    return (
        <Zoom>
            <div className="block">
                <div style={{fontWeight: 500, fontSize: '32px'}}>
                    <p> Обо мне </p>
                </div>
                <div style={{fontSize: '26px'}}>
                    <ul>
                        <li>
                            Мне нравится получать новые знания и навыки (не обязательно технические), год назад начал вести репозиторий знаний.
                        </li>
                        <li>
                            Люблю большие и высоконагруженные системы.
                        </li>
                        <li>
                            Постепенно хотел бы уйти в менеджмент.
                        </li>
                        <li>
                            Открыт к предложениям совместных проектов.
                        </li>
                    </ul>        
                </div>
            </div>
        </Zoom>
    );
}

export default About;