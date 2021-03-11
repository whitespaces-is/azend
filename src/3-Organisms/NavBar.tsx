import './NavBar.scss';
// Atoms 
import Logo from '../1-Atoms/Logo';
// Molecules
import Navigation from '../2-Molecules/Navigation';

const message = Navigation()

function NavBar() {
    return (
        <div className="navigation wrapper">
            <div className="navigation__logo">
                <Logo />
            </div>
            <nav>
                {message}
            </nav>
        </div>
    )
}

export default NavBar;