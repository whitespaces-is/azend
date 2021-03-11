import './NavItem.scss';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

const navContent = [
    { name: 'Item 1', slug: 'https://google.com/'},
    { name: 'Item 2', slug: 'https://google.com/'},
    { name: 'Item 3', slug: 'https://google.com/'},
    { name: 'Item 4', slug: 'https://google.com/'}
]

function loopItems() {
    navContent.forEach((item) => {
        return (
            <li>
                {item.name}
            </li>
        )
    })
}

function NavItem(): JSX.Element {
    return(loopItems())
}

export default NavItem;