import React from 'react';
import './styles.css';

import logo from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import heartIcon from '../../assets/images/icons/purple-heart.svg';

export default function Landing(){
  return(
    <div id="page-landing">
      <div id="page-landing-content">

        <div className="logo-container">
          <img src={logo} alt="Logo"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landingImg} alt="Landing" className="hero-image"/>

        <div className="buttons-container">
          <a href="/" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </a>
          <a href="/" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas"/>
            Dar aulas
          </a>
        </div>

        <span className="total-connections">
          Total de 256 conexões já realizadas
          <img src={heartIcon} alt="Coração roxo"/>
        </span>
      </div>
    </div>
  )
}