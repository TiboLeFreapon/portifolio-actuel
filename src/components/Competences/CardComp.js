import BarreProgression from "./BarreProgression";

const CardComp = ({ titreCarte, children }) => {

    return (
        <div className="card-comp">
            <h2> {titreCarte}</h2>
            {children}
        </div>
    );

}

export default CardComp;