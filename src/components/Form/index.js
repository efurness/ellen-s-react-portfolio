
import React, { useRef, useState } from 'react';
import {validateEmail} from '../utils/helpers.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




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
    
    const notify = () =>
    toast.success('Form Submitted, Thank you!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });


  

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
          
          <button type='submit' className='btn btn-primary'>   Submit       </button>

          <button onClick={notify} input type="submit" id="my_form" className="hvr-rectangle-out btn">Send</button>


        </form>
        <ToastContainer />
        </div>
        </section>
       );
}

export default Form;