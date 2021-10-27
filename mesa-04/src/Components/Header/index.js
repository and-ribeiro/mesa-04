import './style.css';

function Header({logo}) {    
        return(
            <header>
                <img src={logo} alt="logo-img"/>
                <ul class="Lista-Header">
                    <li>Home</li>
                    <li>Contato</li>
                    <li>Sobre</li>
                </ul>
            </header>
        )    
}

export default Header