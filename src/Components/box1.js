import "./box1.css"

function Box1 (props) {
    return(
        <div className="box11">
            <img className="img11" src={props.src} alt="" />
            <p className="name1">{props.name1}</p>
            <p className="name2">{props.name2}</p>
            <p className="name3">{props.name3}</p>
        </div>
    )
}








export default Box1;