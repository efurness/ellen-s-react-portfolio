import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  
  return (
    <div>
      <h5>Please Send Me a Message</h5>
          <form onSubmit={handleSubmit}>

      <div class="row mb-3">
  <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm" htmlFor="name">Name</label>
  <div class="col-sm-10">
    <input type="text" class="form-control form-control-sm"  placeholder="required"></input>
  </div>
</div>
<div class="row mb-3">
  <label for="colFormLabel" class="col-sm-2 col-form-label" htmlFor="email">Email</label>
  <div class="col-sm-10">
    <input type="email" class="form-control" placeholder="required"></input>
  </div>
</div>
<div class="row">
  <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg" htmlFor="message">Message</label>
  <div class="col-sm-10">
    <textarea id="message" required class="form-control form-control-lg" placeholder="required"></textarea>
  </div>
</div>
<button type="submit">{status}</button>
    </form>

      
    </div>
  );
};

export default Contact;