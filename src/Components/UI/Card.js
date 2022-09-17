import './Card.css';
function Card (props){
    const Claases = 'card ' + props.className;
return ( 
    <div className={Claases}>
     {props.children}
    </div>
)
}
export default Card;