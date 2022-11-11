 function Accordion(props){
    return (
        <>
<div className="accordion" id={props.item.id}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        {props.item.title} - ${props.item.price}  Spice Level = {props.item.spicey_level}
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent={props.item.id}>
      <div className="accordion-body">
        {props.item.description}
      </div>
    </div>
  </div>
</div>

</>)
}
export default Accordion