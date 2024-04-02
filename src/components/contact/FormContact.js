import React, { useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { LangContext } from "../../App";
const C_CONTACT = require("../../donnees/contact/ContactData");


const TEXTE_CONTACT = require("../../donnees/contact/texteContrat")

function FormContact() {

  const lang = useContext(LangContext);

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
        <h2>{TEXTE_CONTACT[lang].titreContact}</h2>

        <div className='label-list'>

          <label for="name">{TEXTE_CONTACT[lang].nom}<input type="text" name="name" required /></label>

          <label for="email">{TEXTE_CONTACT[lang].email}<input type="email" name="email" /></label>
          <label for="societe">{TEXTE_CONTACT[lang].entreprise}<input type="text" name="societe" /></label>


          <label for="message">{TEXTE_CONTACT[lang].message}<textarea name="message" maxLength={2000} required></textarea></label>

        </div>

        <button type="submit">{TEXTE_CONTACT[lang].envoyer}</button>
      </form>
    </div>
  )
}

export default FormContact;