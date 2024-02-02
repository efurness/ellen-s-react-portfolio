import './footer.css';

function Footer() {
    return (
    
        <div id="links">

<br />




<ul>
                        
                        <li class="list-inline-item zoom"><a href="Resume2024.pdf" target="blank"><img class="img-fluid rounded mb-4 mb-lg-0" src={process.env.PUBLIC_URL + '/resume.png'}
                    alt="resume_photo" /></a></li>
                        <li class="list-inline-item zoom"><a href="https://stackoverflow.com/users/19552848/e-douglas?tab=profile"><img class="img-fluid rounded mb-4 mb-lg-0" src={process.env.PUBLIC_URL + '/stack.png'}
                    alt="stack_photo" /></a></li>
                        {/* <li class="list-inline-item zoom"><a href="mailto:Ellen.Furness@du.edu"><img class="img-fluid rounded mb-4 mb-lg-0" src={process.env.PUBLIC_URL + '/mail.png'}
                    alt="mail_photo" /></a></li> */}
                        <li class="list-inline-item zoom" ><a href="https://www.linkedin.com/in/e-d-8b9415241/"><img class="img-fluid rounded mb-4 mb-lg-0" src={process.env.PUBLIC_URL + '/link.png'}
                    alt="linked_photo" /></a></li>
                    <li class="list-inline-item zoom"><a href="https://efurness.github.io/Ellen-sProfessionalPortfolio/photo.html"><img class="img-fluid rounded mb-4 mb-lg-0" src={process.env.PUBLIC_URL + '/camera.png'}
                    alt="photos" /></a></li>

<h6>&copy; Monty-Asp 2024</h6>    < br />


            </ul>

        <nav class="navbar navbar-dark static-bottom bg-yellow">






        
                    
                    
                    </nav>
                    </div>
                    
                                  
                                  
                    
    )
}
export default Footer;