function Form(props) {
  return (
    <form action="" className="form-container">
      <h3>Form</h3>
      <div>
        <label htmlFor="fname">First name</label>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={props.changeAllHandller}
        />
      </div>
      <div>
        <label htmlFor="lname">Last name</label>
        <input
          type="text"
          id="lname"
          name="lname"
          onChange={props.changeAllHandller}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={props.changeAllHandller}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={props.changeAllHandller}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <input
          type="text"
          id="message"
          name="message"
          onChange={props.changeAllHandller}
        />
      </div>
    </form>
  );
}

export default Form;
