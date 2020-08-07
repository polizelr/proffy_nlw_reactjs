import React from 'react';
import './styles.css';

import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg';

export default function TeacherItem (){
  return(
    <article className="teacher-item">
      <header>
        <img src="https://thumbnail.imgbin.com/25/15/2/imgbin-computer-icons-avatar-social-media-blog-font-awesome-avatar-X2JH6eX8zi1J01W8VN1gyhW6B_t.jpg" alt="Avatar"/>
        <div>
          <strong>Mario Andrade</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam aliquam sem et tortor consequat id porta nibh.
        <br /> <br />
        Consectetur purus ut faucibus pulvinar elementum integer enim neque. 
      </p>

      <footer>
        <p>
          Preço/hora 
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={WhatsAppIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}