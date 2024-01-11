
function ButtonSubmit(props) {
    const { onClick } = props;
  
    return (
      <button className="btn-primary" onClick={onClick}>Submit</button>
    )
}


export default ButtonSubmit;


