import React from 'react'

function FormContact() {
    return (

        <div className="form-contact">
            
            <form name="contact" method="POST" data-netlify="true">


                <div className='label-list'>

                    <label for="name">Nom: <input type="text" name="name" /></label>

                    <label for="email">Email: <input type="email" name="email" /></label>
                    <label for="email">Entreprise: <input type="email" name="email" /></label>


                    <label for="message">Message: <textarea name="message"></textarea></label>

                </div>

                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default FormContact;