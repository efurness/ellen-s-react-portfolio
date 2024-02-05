function Body() {

    return (
        
        <body>

        
        
    <div class="container px-4 px-lg-5" id="intro">
    

        <div class="row gx-4 gx-lg-5 align-items-center my-5">
            <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src={process.env.PUBLIC_URL + '/portfolioNew.png'}
                    alt="portfolio_photo" /></div>
            <div class="col-lg-5">
                
                
            <h3>Ellen Furness</h3>

                <h5>Web development, Conservation, GIS, Population Biology, Biological Research</h5> 
                
                <br />
            </div>
        </div>
        <div class="card text-white bg-secondary my-5 py-4 text-center">
            <div class="card-body">
                <p class="text-white m-0">
                <p class="lead mb-0">The non-profit Conservation Treaty Support Fund, 
                    <a href="https://www.prweb.com/releases/2007/02/prweb502845.htm">  CTFS</a> supported the <a href="https://cites.org/eng">Convention
                    of the International Trade in Endangered Species of Wild Fauna and Flora </a> with partners
                    <a href="https://worldwildlife.org"> World Wildlife Fund</a> and <a href="https://traffic.org"> TRAFFIC</a> in this pursuit, contributing to protecting species like
                    elephants, rhinos and snow leopards: all vulnerable species because of poaching and illegal trade.
                </p>
                </p>
            </div>
        </div>
        <div class="row gx-4 gx-lg-5">
            <div class="col-md-4 mb-5">
                
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title zoom">My education</h5>
                        <p class="card-text">My education includes a Masters in Geographical Information Systems, at the University of Denver and Population Biology at the University of Colorado.
                            GIS mapping projects. A Full-Stack JavaScript web development certificate.
                        </p>
                        <a href='https://efurness.github.io/Ellen-sProfessionalPortfolio/GIS2.pdf' class="btn btn-primary" >GIS Project</a>
          

                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <div class="card">
                <img src={process.env.PUBLIC_URL + '/peaks.png'} class="card-img-top" alt="Indian peaks" />
                    <div class="card-body">
                        <h5 class="card-title zoom">Colorado</h5>
                        <p class="card-text">I love hiking with my English Retriever dog and enjoy cycling, snowshoeing, and skiing.</p>
                        <a href="https://www.cblandtrust.org/" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-5" id="profession">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title zoom">Profession</h5>
                        <p class="card-text">Work includes U.S. Forest Service
                Burned Area Emergency Rehabiliation, GIS associate mapping Turkey Creek watershed with ArcGIS ArcInfo and ArcEdit,                                
                and a work partnership with the National Park Service Air Resources Division.
 </p>
                         <br />
                        <br />
                        <a href="https://www.nps.gov/orgs/1971/index.htm" class="btn btn-primary">NPS Air websites</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container px-4 px-lg-5" id="projects">

<div class="card bg-dark text-white">
  <img src={process.env.PUBLIC_URL + '/sand.png'} class="card-img" alt="sand"></img>
  <div class="card-img-overlay">


    <p class="card-text zoom">
                        <ul>
                        <center>
                            <li>ArcGIS Pro, ArcGIS Online, Python</li>        
                            <li>FULL-STACK Web Development</li>                                                
                            <li>REACT, MERN, JavaScript, Express</li>

                            </center>
                        </ul></p>



  </div> 
</div>
< br />

       <br />
       <br />
               <center> <h4>Projects and Challenges</h4></center>

            </div>
            
    
    
    
    
    
</body>
    )
}
export default Body; 