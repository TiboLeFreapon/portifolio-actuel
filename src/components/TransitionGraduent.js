const TransitionGraduent = ({couleur1, couleur2}) =>{
    return(
        <div className="gradient" style={{background: `linear-gradient(to bottom, ${couleur1}, ${couleur2})`, height: "300px"}}>
            
        </div>
    );
}

export default TransitionGraduent;