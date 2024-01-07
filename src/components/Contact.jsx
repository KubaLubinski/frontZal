import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact =() =>{

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_86tgnlw', 'template_ehxzmck', form.current, 'YjiRyK65bHTD4E2zk')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <div class="container">
      <form ref={form} onSubmit={sendEmail}>
        <div class="mb-3">
            <label class="form-label">Imię i nazwisko: </label>
            <input type="text" class="form-control" name="user_name" placeholder='Imię i nazwisko'/>
        </div>
        <div class="mb-3">
            <label class="form-label">Email: </label>
            <input type="email" class="form-control" name="user_email" placeholder='Adres E-mail'/>
        </div>
        <div class="mb-3">
            <label class="form-label">Wiadomość: </label>
            <textarea class="form-control" rows="3" name="message" />
        </div>
        <input type="submit" value="Wyślij" />
      </form>
      </div>
    );
  };

export default Contact;