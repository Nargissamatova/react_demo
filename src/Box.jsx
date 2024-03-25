const Box = (props) =>{
    return (
      <div className="container">
        <h1>{props.name}</h1>
        <p>Name: {props.name}</p>
        <p>Title: {props.title}</p>
        <p>Location: {props.location}</p>
      </div>
      
    )
  }


  export default Box;