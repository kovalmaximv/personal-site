import { Zoom } from 'react-reveal';

function Skills(props) {
    return (
        <Zoom>
            <div className="block">
                <div style={{fontWeight: 500, fontSize: '32px'}}>
                    <h2 align='center'> Мои навыки </h2>
                </div>
                <div className='badge-showcase'>
                    <div className='badge tech'>Java</div>
                    <div className='badge tech'>Spring</div>
                    <div className='badge theory'>WEB</div>
                    <div className='badge theory'>Design</div>
                    <div className='badge theory'>Algorithms</div>
                    <div className='badge sql'>Postgres</div>
                    <div className='badge no-sql'>Redis</div>
                    <div className='badge no-sql'>Mongo</div>
                    <div className='badge tool'>Kafka</div>
                    <div className='badge tool'>JWT</div>
                    <div className='badge tool'>Swagger</div>
                    <div className='badge tool'>Gradle</div>
                    <div className='badge tool'>Maven</div>
                    <div className='badge tool'>ElasticSearch</div>
                    <div className='badge tool'>Prometheus</div>
                    <div className='badge tool'>Graphana</div>
                    <div className='badge tool'>Markdown</div>
                    <div className='badge devops'>Docker</div>
                    <div className='badge devops'>Ubuntu</div>
                    <div className='badge devops'>Bash</div>
                    <div className='badge devops'>Kunernetes</div>
                    <div className='badge tech'>JavaScript</div>
                    <div className='badge tech'>React</div>
                    <div className='badge tool'>CSS</div>
                    <div className='badge tool'>HTML</div>
                </div>
            </div>
        </Zoom>
    );
}

export default Skills;