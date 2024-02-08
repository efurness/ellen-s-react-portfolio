function Nav() {
    return (

        
        <div class="card bg-dark text-white">
         
        <img src={process.env.PUBLIC_URL + '/gis.png'} class="card-img" alt="blueimage" />
        <h5> WELCOME TO MY PORTFOLIO</h5>

        <div class="card-img-overlay">
            
        </div>
        <nav class="navbar navbar-dark fixed-top bg-dark">

        <div>
        <ul> 
        <li> <a href="#intro">About</a></li>

                        <li> <a href="#projects">Projects/Resume</a></li>
                        <li> <a href="#GIS Projects">GIS Projects</a></li>

                        <li> <a href="#links">Links</a></li>

    
                    </ul>
        </div>

      </nav>

                </div>

                
    )
}
export default Nav;