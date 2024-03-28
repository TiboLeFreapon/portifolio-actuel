import "../style/pageContact.scss"
import FormContact from "./contact/FormContact";

const PageContact = () => {

    return (<div className="page-contact">
        <div className='text-exp'>
            <span className='pres'>
                Contact.<span >N'hésitez pas à me contacter,  je suis très réactif et à la recherche d'un emploi.
                </span>
            </span>
        </div>
        <div className="contenu-contact">
            <div className="contacts">
                <a className="linkdin contact" href={"https://www.linkedin.com/in/thibault-schmitt-b229a9151/"} target="_blank" rel="noopener noreferrer" > <img src="https://cdn-icons-png.flaticon.com/128/2111/2111532.png" loading="lazy" alt="Linkedin " title="Linkedin " width="64" height="64" /><span>Thibault Schmitt</span>
                </a>
                <a href={"mailto:thibault.schmitt5@gmail.com"} className="gmail contact" target="_blank" rel="noopener noreferrer" ><img src="https://cdn-icons-png.flaticon.com/128/3690/3690706.png" loading="lazy" alt="Mail " title="Mail " width="64" height="64" />
                    <span>thibault.schmitt5@gmail.com</span></a>
                <div className="telephone contact"><img src="https://cdn-icons-png.flaticon.com/128/25/25453.png" loading="lazy" alt="Telephone handle silhouette " title="Telephone handle silhouette " width="64" height="64" />
                    <span><img src="https://cdn-icons-png.flaticon.com/128/321/321219.png" loading="lazy" alt="Canada " title="Canada " width="30" height="30" /> +1 (438) 228-6870</span>
                    <span><img src="https://cdn-icons-png.flaticon.com/128/321/321230.png" loading="lazy" alt="France " title="France " width="30" height="30" />+1 6 80 35 83 06</span>
                </div>
            </div>

            <FormContact />
        </div>
    </div>);
};

export default PageContact;