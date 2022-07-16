function Nav() {
    return (

        
        <div class="card bg-dark text-white">
         
        <img src={process.env.PUBLIC_URL + '/assateague.png'} class="card-img" alt="Assateague Island" />
        <div class="card-img-overlay">
            <h5> WELCOME TO MY PORFOLIO</h5>
            
        </div>
        <nav class="navbar navbar-dark fixed-top bg-dark">
        <div>
        <ul>
        <li>MY PORTFOLIO</li>
                        <li> <a href="#projects">Projects/Resume</a></li>
                        <li> <a href="#contact">Contact</a></li>

    
                    </ul>
        </div>
      </nav>
                </div>

                
    )
}
export default Nav;