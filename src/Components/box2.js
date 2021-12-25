import "./box2.css"

function Box2 (props) {
    return(
        <div className="box22">
            <img className="img22" src={props.src} alt="" />
            <p className="name1">{props.name1}</p>
            <p className="name2">{props.name2}</p>
            <p className="name3">{props.name3}</p>
        </div>
    )
}

export default Box2;