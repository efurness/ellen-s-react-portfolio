import React, { useRef, useState } from 'react';
import {validateEmail} from '../utils/helpers.js';




const Form = () => {
  const form = useRef();

 

  const[errorMessage, setErrorMessage] = useState("");

  
  

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    
  };


  

  return (
      
    <section id='contact'> 
          <h5>Please Send Me a Message</h5>
     
      <div className='container contact__container'>
        <div className='contact__options'>
         
          <article className='contact__option'>
            
          </article>
        </div>
        <form ref={form} onSubmit>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            onBlur={handleChange}
            required
          />
          <input
           type='email' 
           name='email' 
           placeholder='Your Email'          
           onBlur={handleChange}
           required />
          <textarea 
           name='message' 
           rows='7'        
           onBlur={handleChange}
           placeholder='Your Message'
           required />
            
          
          {errorMessage && (
          <div>
            <p >{errorMessage}</p>
          </div>
        )}
          
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
        
        <h6>&copy; Courtesy, National Park Service &copy; Assateague Island photo</h6>
                    <h6>&copy; Monty-Asp 2022</h6>    
                    <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      
    </section>
  );
};

export default Form;
