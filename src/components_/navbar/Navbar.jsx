import './navbar.scss';

export const Navbar = () => {
    return <nav className="Navbar_main">
        <ul>
            <li>
                <a href="/">Home</a>
                <ul>
                    <li><a href="#">Home page</a></li>
                    <li><a href="#">Home slider</a></li>
                    <li><a href="#">Home ..</a></li>
                </ul>
            </li>
            <li>
                <a href="/pages">Pages</a>
                <ul>
                    <li><a href="#">Page page</a></li>
                    <li><a href="#">Page slider</a></li>
                    <li><a href="#">Page ..</a></li>
                </ul>
            </li>
            <li>
                <a href="#">White Papers</a>
            </li>
            <li>
                <a href="#">FAQS</a>
            </li>
            <li>
                <a href="#">Support</a>
            </li>
        </ul>
    </nav>
}