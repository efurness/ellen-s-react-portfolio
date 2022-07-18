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
                    <li class="list-inline-item"><a href="https://efurness.github.io/Ellen-sProfessionalPortfolio/photo.html">My Photos</a></li>

                    <br />
        <br />
        <br />
      </div>
      <ul>
                        
                        <li class="list-inline-item"><a href="Furness_Resume_2022.pdf" target="blank"><img class="img-fluid rounded mb-4 mb-lg-0" src={process.env.PUBLIC_URL + '/resume.png'}
                    alt="portfolio_photo" /></a></li>
                        <li class="list-inline-item"><a href="https://stackoverflow.com/users/19552848/e-douglas?tab=profile"><img class="img-fluid rounded mb-4 mb-lg-0" src={process.env.PUBLIC_URL + '/stack.png'}
                    alt="portfolio_photo" /></a></li>
                        <li class="list-inline-item"><a href="mailto:Ellen.Furness@du.edu"><img class="img-fluid rounded mb-4 mb-lg-0" src={process.env.PUBLIC_URL + '/mail.png'}
                    alt="portfolio_photo" /></a></li>
                        <li class="list-inline-item" ><a href="https://www.linkedin.com/in/e-d-8b9415241/"><img class="img-fluid rounded mb-4 mb-lg-0" src={process.env.PUBLIC_URL + '/link.png'}
                    alt="portfolio_photo" /></a></li>
                    <li class="list-inline-item"><a href="https://efurness.github.io/Ellen-sProfessionalPortfolio/photo.html"><img class="img-fluid rounded mb-4 mb-lg-0" src={process.env.PUBLIC_URL + '/camera.png'}
                    alt="portfolio_photo" /></a></li>

                        

            </ul>
      
    </section>
  );
};

export default Form;
