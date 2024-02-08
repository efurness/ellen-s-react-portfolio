import './footer.css';

function Footer() {
    return (
    
        <div id="GIS Projects">


<div>
    <h4>GIS Projects</h4>
    <br />
    <center>
    <h5><a href="https://storymaps.arcgis.com/stories/32404e9d37564136bb64c1cfc354d9a2">ArcGIS Story Map</a></h5>


    <iframe src="https://storymaps.arcgis.com/stories/32404e9d37564136bb64c1cfc354d9a2" width="60%" height="150px" frameborder="0" allowfullscreen allow="geolocation" title="arcGIS Story Map"></iframe>
    </center>
< br />

<center>
    <h5><a href="https://experience.arcgis.com/experience/94d871b4838548d9a8bc44f44addd801">ArcGIS Experience Builder</a></h5>


    <iframe src="https://experience.arcgis.com/experience/94d871b4838548d9a8bc44f44addd801" width="80%" height="400px" frameborder="0" allowfullscreen allow="geolocation" title="Experience Builder"></iframe>
    </center>

    </div>
<br />
    <div id="links">

<ul>
                        < br />
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
                    <li class="list-inline-item zoom"><a href="https://storymaps.arcgis.com/stories/32404e9d37564136bb64c1cfc354d9a2"><img class="img-fluid rounded mb-4 mb-lg-0" src={process.env.PUBLIC_URL + '/storymap.png'}
                    alt="photos" /></a></li>
                    

<h6>&copy; Monty-Asp 2024</h6>    < br />


            </ul>

        <nav class="navbar navbar-dark static-bottom bg-yellow">






        
                    
                    
                    </nav>
                    </div>
                    </div>
                    
                                  
                                  
                    
    )
}
export default Footer;