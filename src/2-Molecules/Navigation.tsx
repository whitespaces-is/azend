import './Navigation.scss';
// Atoms
import { NavItem } from '../1-Atoms/Atoms.module'

function Navigation() {
    return (
        <ul className="nav-container">
            <NavItem />
        </ul>
    )
}

export default Navigation;