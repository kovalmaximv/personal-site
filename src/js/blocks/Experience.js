import React from 'react';
import { Zoom } from 'react-reveal';

class Experience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            alfa: true,
            lamoda: false,
            mtc: false,
            itigris: false
        };
    }

    render() {
        let experienceText;
        if (this.state.alfa) {
            experienceText = <AlfaBank/>;
        } 
        if (this.state.lamoda) {
            experienceText = <Lamoda/>;
        }
        if (this.state.mtc) {
            experienceText = <MTC/>;
        }
        if (this.state.itigris) {
            experienceText = <Itigris/>;
        }

        return (
            <Zoom>
                <div className="block">
                    <div style={{fontWeight: 500, fontSize: '32px'}}>
                        <h2 align='center'> Мой опыт </h2>
                    </div>
    
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{display: 'flex', flexDirection: 'column', height: 'max-content', width: '10rem'}}>
                            <div className={"button " + (this.state.alfa ? 'active' : '')} style={{fontSize: '15px', marginBottom: '0.5rem'}} onClick={() => {this.activateAlfa()}}>Альфа-Банк</div>
                            <div className={"button " + (this.state.lamoda ? 'active' : '')} style={{fontSize: '15px', margin: '0.5rem 0rem'}} onClick={() => {this.activateLamoda()}}>Lamoda</div>
                            <div className={"button " + (this.state.mtc ? 'active' : '')} style={{fontSize: '15px', margin: '0.5rem 0rem'}} onClick={() => {this.activateMtc()}}>МТС</div>
                            <div className={"button " + (this.state.itigris ? 'active' : '')} style={{fontSize: '15px', margin: '0.5rem 0rem'}} onClick={() => {this.activateItigris()}}>Itigris</div>
                        </div>
                        <div style={{marginLeft: '2rem', fontSize: '18px', width: '100%'}}>
                            {experienceText}
                        </div>     
                    </div>
                </div>
            </Zoom>
        );
    }

    activateAlfa() {
        this.clearAll();
        this.setState({
            alfa: true
        })
    }

    activateLamoda() {
        this.clearAll();
        this.setState({
            lamoda: true
        })
    }

    activateMtc() {
        this.clearAll();
        this.setState({
            mtc: true
        })
    }

    activateItigris() {
        this.clearAll();
        this.setState({
            itigris: true
        })
    }

    clearAll() {
        this.setState({
            alfa: false,
            lamoda: false,
            mtc: false,
            itigris: false
        })
    }
}

function AlfaBank(props) {
    return(
        <div>
            <h3>Senior Java Software Engineer</h3>
                        <p style={{fontSize: '14px', marginBottom: '1.5rem'}}>Ноябрь 2022 - по настоящее время</p>
                        Архитектура: <br/>
                        - Микросервисы на Java 11-17 + Spring. <br/> 
                        - Spring Cloud, RxJava <br/>
                        - MongoDB, Gradle, Kubernetes, Ansible, Docker <br/>
                        <br/>
                        Обязанности: <br/>
                        - Проведение грумингов <br/>
                        - Участие в выравнивании процессов разработки <br/>
                        - Проведение код ревью <br/>
        </div>
    );
}

function Lamoda(props) {
    return(
        <div>
            <h3>Java Software Engineer</h3>
                        <p style={{fontSize: '14px', marginBottom: '1.5rem'}}>Декабрь 2021 - Ноябрь 2022</p>
                        Архитектура: <br/>
                        - Микросервисы на Java 8-11 + Spring. <br/> 
                        - Gradle, Ansible, Bamboo, Docker <br/>
                        <br/>
                        Обязанности: <br/>
                        - В одиночку провёл рефакторинг esb шины дирекции. В шине порядка 100 роутов <br/>
                        - Рефакторинг деплоя сервисов команды (Ansible + Bamboo) <br/>
                        - Разработка новых сервисов (вместе с настройкой инфраструктуры) <br/>
                        - Разработка нового функционала и поддержка существующего <br/>
                        - Технический анализ для описания задач <br/>
                        - Проведение код ревью <br/>
        </div>
    );
}

function MTC(props) {
    return(
        <div>
            <h3>Java Software Engineer</h3>
                        <p style={{fontSize: '14px', marginBottom: '1.5rem'}}>Август 2021 - Декабрь 2021</p>
                        Архитектура: <br/>
                        - Микросервисы на Java 8. <br/> 
                        - Maven, Ansible. <br/>
                        <br/>
                        Обязанности: <br/>
                        - Мейнтейнер нескольких проектов <br/>
                        - Технический анализ задач <br/>
                        - Разработка нового сервиса для маркетинга <br/>
                        - Поддержка старых сервисов <br/>
                        - баг фиксы и рефакторинг <br/>
        </div>
    );
}

function Itigris(props) {
    return(
        <div>
            <h3>Junior java software Engineer</h3>
                        <p style={{fontSize: '14px', marginBottom: '1.5rem'}}>Ноябрь 2019 - Август 2021</p>
                        Архитектура: <br/>
                        - Монолит на Groovy + Grails. <br/>
                        - Еще один монолит на Java 11 + Spring. <br/> 
                        - Maven, Docker. <br/>
                        <br/>
                        Обязанности: <br/>
                        - Переписывание legacy монолита (groovy, grails, gsp -&gt; java, spring, REST). <br/>
                        - Написание нового backend функционала. <br/>
                        - Решение research проблем. <br/>
        </div>
    );
}

export default Experience;