function View(props) {
  return (
    <div>
      <h3>View</h3>
      <p>First name: {props.fname}</p>
      <p>Last name: {props.lname}</p>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
      <p>Message: {props.message}</p>
    </div>
  );
}

export default View;
