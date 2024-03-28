import React, { useRef }  from 'react';
import emailjs from '@emailjs/browser';
const C_CONTACT = require("../../donnees/contact/ContactData");

function FormContact() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(C_CONTACT.serviceId, C_CONTACT.templateId, form.current, {
        publicKey: C_CONTACT.publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (

        <div className="form-contact">

            <form name="contact" ref={form} onSubmit={sendEmail}>
                <h2>Contactez-moi directement !</h2>

                <div className='label-list'>

                    <label for="name">Nom: *<input type="text" name="name" required/></label>

                    <label for="email">Email: <input type="email" name="email" /></label>
                    <label for="societe">Entreprise: <input type="text" name="societe" /></label>


                    <label for="message">Message: *<textarea name="message" maxLength={2000} required></textarea></label>

                </div>

                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default FormContact;