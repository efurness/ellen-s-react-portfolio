import './nav2.css';


function Nav2() {

    return (
        <footer>
        <div>
            <nav class="nav">
        <div class="container">
            <div class="logo">
                <a href="#Logo">Your Logo</a>
            </div>
            <div id="mainListDiv" class="main_list">
                <ul class="navlinks">
                    <li><a href="#About">About</a></li>
                    <li><a href="Profession">Portfolio</a></li>
                    <li><a href="#Education">Services</a></li>
                    <li><a href="#Projects/Resume">Contact</a></li>
                </ul>
            </div>
            <span class="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>

        </div>
        </footer>
        )
    
}
export default Nav2;