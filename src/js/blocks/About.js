import { Zoom } from 'react-reveal';

function About(props) {
    return (
        <Zoom>
            <div className="block">
                <div style={{fontWeight: 500, fontSize: '32px'}}>
                    <h2 align='center'> Обо мне </h2>
                </div>
                <div style={{fontSize: '24px', lineHeight: '1.65'}}>
                    Мне нравится получать новые знания и навыки (не обязательно технические), год назад начал вести репозиторий знаний. <br/>
                    Люблю большие и высоконагруженные системы. <br/>
                    Постепенно хотел бы уйти в менеджмент. <br/>
                    Открыт к предложениям совместных проектов. <br/>
                </div>
            </div>
        </Zoom>
    );
}

export default About;