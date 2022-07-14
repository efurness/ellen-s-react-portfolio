function Body() {

    return (
        <body>
            
    
   
    <div class="container px-4 px-lg-5">
    <div class="navLink">
                    <ul>
                        <li><a href="#intro">About Me</a></li>
                        <li><a href="#profession">Profession</a></li>
                        <li> <a href="#projects">Projects/Resume</a></li>
    
                    </ul>
             
                </div>

        <div class="row gx-4 gx-lg-5 align-items-center my-5" id="intro">
            <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src={process.env.PUBLIC_URL + '/portfolio_photo.png'}
                    alt="portfolio_photo" /></div>
            <div class="col-lg-5">
                

                <h5>Web development, Conservation, GIS, Population Biology, Biological Research</h5> 
                
                <br />
                <a class="btn btn-primary" href="https://www.linkedin.com/in/e-d-8b9415241/">Linked-In</a> 
            </div>
        </div>
        <div class="card text-white bg-secondary my-5 py-4 text-center">
            <div class="card-body">
                <p class="text-white m-0">
                <p class="lead mb-0" id="profession">The non-profit Conservation Treaty Support Fund 
                    <a href="https://www.prweb.com/releases/2007/02/prweb502845.htm">CTSF</a>, supported the <a href="https://cites.org/eng">Convention
                    of the International Trade in Endangered Species of Wild Fauna and Flora</a> with partners
                    <a href="https://worldwildlife.org">World Wildlife Fund</a>, and <a href="https://traffic.org">TRAFFIC</a> in this pursuit, contributing to protecting species like
                    elephants, rhinos and snow leopards, all vulnerable species because of poaching and illegal trade.
                </p>
                </p>
            </div>
        </div>
        <div class="row gx-4 gx-lg-5">
            <div class="col-md-4 mb-5">
                
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">My education</h5>
                        <p class="card-text">I studied Biology at Colorado College, and later, pursued Population Biology for my Masters.  Researching the Psittacine species of the
                            South American continent, as well as developing a plan for species' conservation, were part of my studies.
                            I have a second Masters, in Geographical Information Systems, at the University of Denver.
                              During that time, I partnered with DU and the National Park Service.
                            My continuing education had included GIS courses at CU.  Here is one of my
                            GIS mapping projects; beetle kill damage as in relation to the three-toed woodpecker' habitat.
                            <a href="assets/images/ATTW_hillshade.png" alt="GIS hillshade photo">Hillshade image </a>.
                        </p>
                        <a href="pdf" class="btn btn-primary">GIS project</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <div class="card">
                <img src={process.env.PUBLIC_URL + '/peaks.png'} class="card-img-top" alt="Indian peaks" />
                    <div class="card-body">
                        <h5 class="card-title">Colorado</h5>
                        <p class="card-text">I love hiking with my English Retriever dog, where you will find in the link below. I also love cycling, snowshoeing, and skiing.</p>
                        <a href="https://www.cblandtrust.org/" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Profession</h5>
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
    
    <div class="row gx-4 gx-lg-5">
            <div class="col-md-4 mb-5">
                
                <div class="card2">
                    <div class="card-body">
                        <h5 class="card-title">BOOTCAMP PROJECTS</h5>
                        <p class="lead mb-0" id="projects"><a href="https://github.com/AuraFly/Fit_With_Friends.git">Project 2 - Fitness with Friends
                            </a></p>
                            <p class="lead mb-0"><a href="https://fitwithfriends-app.herokuapp.com/">Project 2 - Heroku
                                </a></p>
                        <p class="lead mb-0"><a href="https://github.com/jgault87/city-scapes.git">Project 1 - City Scapes
                                </a></p>
                        <p class="lead mb-0"><a href="https://jgault87.github.io/city-scapes/">Project 1 - City Scapes landing
                                page</a></p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <div class="card2">
                    <div class="card-body">
                        <h5 class="card-title">Resume-LinkedIn</h5>
                        <p class="lead mb-0"><a href="Furness_Resume_2022.pdf" target="blank">Resume</a></p>
                        <p class="lead mb-0"><a href="https://www.linkedin.com/in/e-d-8b9415241/">LinkedIn</a></p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <div class="card2">
                    <div class="card-body">
                        <h5 class="card-title">GITHUB Projects</h5>
                        <p class="lead mb-0"><a href="https://github.com/efurness/Team-Profile-Generator.git"> Team Profile Generator - GitHub</a></p>                     
                        <p class="lead mb-0"><a href="https://github.com/efurness/note-taker-interface.git">Note Taker Interface - GitHub</a></p>
                        <p class="lead mb-0"><a href="https://pure-crag-28667.herokuapp.com/">Note Taker - Heroku</a></p>
                            <p class="lead mb-0"><a href="https://efurness.github.io/Unit-6-weather-dashboard/">Weather Dashboard - Deployed</a></p>
                            <p class="lead mb-0"><a href="https://github.com/efurness/Unit-6-weather-dashboard.git">Weather Dashboard - GitHub</a></p>
                            <p class="lead mb-0"><a href="https://efurness.github.io/Unit5-Work-Day-Scheduler/">Work Day Schedular - Deployed</a></p>
                            <p class="lead mb-0"><a href="https://github.com/efurness/Unit5-Work-Day-Scheduler.git">Work Day Scheduler - GitHub</a></p>
                    </div>
                </div>
                </div>
                </div>
    
    
    
    
    
</body>
    )
}
export default Body;