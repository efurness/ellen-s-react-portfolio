// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const Form = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_49v5a2m', 'template_mwhsqun', form.current, 'Go0vcPT4dnB74-hgM')
//             .then((result) => {
//                 console.log(result.text);
//                 console.log("message sent");
//             }, (error) => {
//                 console.log(error.text);
//             });
// };

//     // function clickMe(){
//     //     alert('You clicked me!')
//     // }

// const notify = () =>
// toast.success('Form Submitted, Thank you!', {
//     position: "bottom-center",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "light",
//     });

//     return (
//         <div className="background">
//             <img className="desk-img" src={ BackgroundImg } alt="desk"/>
        
//             <div className="top">
//                 <h1 className="form-heading">Contact</h1>
//                 <p className="form-info">Let's Talk</p>
//                     <div className="form-container">
//                         <section id="contact">
                        
//                             <form ref={form} onSubmit={sendEmail}>
//                                 <label>Name</label><input type="text" name="user_name" />
//                                 <label>Email</label><input type="email" name="user_email" />
//                                 <label>Message</label><textarea name="message" rows="5" placeholder="Type your message here" />
//                                 <button onClick={notify} input type="submit" id="my_form" className="hvr-rectangle-out btn">Send</button>
//                             </form>
//                             <ToastContainer />
//                         </section>
//                     </div>
//             </div>
//         </div>
//     );
// }

// export default Form;
