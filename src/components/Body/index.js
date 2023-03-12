function Body() {

    return (
        
        <body>

        
        
    <div class="container px-4 px-lg-5" id="intro">
    

        <div class="row gx-4 gx-lg-5 align-items-center my-5">
            <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src={process.env.PUBLIC_URL + '/Montportfolio_bw.png'}
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
                        <p class="card-text">I studied Biology at Colorado College, and later, pursued Population Biology for my Masters.  Researching the Psittacine species of the
                            South American continent, as well as developing a plan for species' conservation, were part of my studies.
                            I have a second Masters, in Geographical Information Systems, at the University of Denver.
                              During that time, I partnered with DU and the National Park Service.
                            My continuing education had included GIS courses at CU.  Here is one of my
                            GIS mapping projects; beetle kill damage as in relation to the three-toed woodpecker' habitat.  Recently as of August 2022, I graduated and obtained a Web Coding Development
                            certificate from the University of Denver Bootcamp.
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
                        <p class="card-text">I love hiking with my English Retriever dog, where you will find in the link below. I also love cycling, snowshoeing, and skiing.</p>
                        <a href="https://www.cblandtrust.org/" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-5" id="profession">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title zoom">Profession</h5>
                        <p class="card-text">Leading to the work at the U.S. Forest Service,
                    I assisted with Burned Area Emergency Rehabiliation.  I also conducted GIS mapping work, using ArcInfo and ortho-imagery, to delineate forest areas. For the National Park Service, I worked for the Air Resources Division: 
                        conducting research, updating maps, and maintaining websites.  Designing the Colorado College Geograpy and Antarctica websites were also part of my employment. 
                         Sample work included research of air pollution effects on National Parks. </p>
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
  <img src={process.env.PUBLIC_URL + '/hawaii.png'} class="card-img" alt="hawaii"></img>
  <div class="card-img-overlay">


    <p class="card-text zoom">
                        <ul>
                        <center>
                            <li>FULL-STACK Web Development Coding Bootcamp</li>                            
                            <li>REACT, MERN, JavaScript, Server/3rd-Party API’s,
                           OOP, SQL, Express, Mongo/Mongoose, MVC</li>
                            </center>
                        </ul></p>
                        <h5 class="card-title"><a href="EDF_Resume_2023new.pdf" target="blank">Resume</a>
    </h5>


  </div>
</div>
    
    
    
       <br />
       <br />
               <center> <h4>Projects and Challenges</h4></center>

            </div>
            
    
    
    
    
    
</body>
    )
}
export default Body;