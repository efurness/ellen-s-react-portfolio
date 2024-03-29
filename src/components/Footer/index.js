import './footer.css';

function Footer() {
    return (
    
        <div id="GIS Projects">


<div>
    <h4>GIS Projects</h4>
    <br />
    <center>
    <h5><a href="https://arcg.is/159z0X0">Satellite (VIIRS) Thermal Hotspots and Fire Activity</a></h5>


    <iframe src="https://arcg.is/159z0X0" width="60%" height="400px" frameborder="0" allowfullscreen allow="geolocation" title="Experience Builder"></iframe>
    </center>
    <br />




    <center>
    <h5><a href="https://storymaps.arcgis.com/stories/32404e9d37564136bb64c1cfc354d9a2">ArcGIS Story Map</a></h5>


    <iframe src="https://storymaps.arcgis.com/stories/32404e9d37564136bb64c1cfc354d9a2" width="60%" height="200px" frameborder="0" allowfullscreen allow="geolocation" title="Experience Builder"></iframe>
    </center>

< br />

<center>
    <h5><a href="https://experience.arcgis.com/experience/94d871b4838548d9a8bc44f44addd801">ArcGIS Experience Builder</a></h5>


    <iframe src="https://experience.arcgis.com/experience/94d871b4838548d9a8bc44f44addd801" width="60%" height="400px" frameborder="0" allowfullscreen allow="geolocation" title="Experience Builder"></iframe>
    </center>
<h6>courtesy WEBGIS 5th edition exercise, Pinde Fu</h6>
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

                    </ul>
                    

<h6>&copy; Monty-Asp 2024</h6>    < br />  

<div class="container-sm">    
<div class="card text-center">
  <div class="card-header">
   <h3> Testimonials</h3>
  
  <div class="card-body">
  <div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    <h3 class="card-title">Cynthia K. Godoy, NCIDQ_Principal</h3>
    <p class="card-text">  I am delighted to wholeheartedly recommend my friend from Web Development bootcamp for her pursuit of a career in GIS.  Her persistance
                  is truly commendable as she consistently strives for excellence in every endeavor.
                  What sets her apart is an unsatiable desire to keep learning, a trait that extends
                  beyond the norm.  Since our school days concluded she digs deeper into the world of programming,
                  devouring at least seven books on the subject.  Her commitment to continuous growth is not just impressive
                  but also inspiring.  I am confident that her passion and dedication will make her an
                  invaluable asset to any GIS team.              
</p>
    <a href="https://cynthia@ck-interiors.com" class="btn btn-primary">Cynthia can be reached</a>
  </div>
  <div class="card-footer text-body-secondary">
    2 days ago
  </div>
  
</div>
</div> 
                
</div>
            </div>
            </div>



            







        
                    
                    
                
                    
                    
                                  
                                  
                    
    )
}
export default Footer;