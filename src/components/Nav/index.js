function Nav() {
    return (

        
        <div class="card bg-dark text-white">
         
        <img src={process.env.PUBLIC_URL + '/assateague.png'} class="card-img" alt="Assateague Island" />
        <h5> WELCOME TO MY PORFOLIO</h5>

        <div class="card-img-overlay">
            
        </div>
        <nav class="navbar navbar-dark fixed-top bg-dark">

        <div>
        <ul>
                        <li> <a href="#projects">Projects/Resume</a></li>
                        <li> <a href="#contact">Contact</a></li>

    
                    </ul>
        </div>

      </nav>

                </div>

                
    )
}
export default Nav;