function Nav() {
    return (
        <div class="card bg-dark text-white">
        <img src={process.env.PUBLIC_URL + 'assateague.png'} class="card-img" alt="Assateague Island" />
        <div class="card-img-overlay">
            <h5> WELCOME TO MY PORFOLIO</h5>
            <div class="navLink">
                    <ul>
                        <li><a href="#intro">About Me</a></li>
                        <li><a href="#profession">Profession</a></li>
                        <li> <a href="#projects">Projects/Resume</a></li>
    
                    </ul>
             
                </div>
        </div>
        
                </div>
    )
}
export default Nav;