import {Link, usePage} from '@inertiajs/react';
import {useState} from 'react';
import Footer from "@/Layouts/Footer.jsx";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    let currentLocation = window.location;

    return (
        <>
            <div className="nav-bar-wrapper">
                <nav className="nav-bar">
                    <Link className="nav-bar__faux-logo" href={'/employee'}>Employee List <span
                        className="u-text-status--familiar">Solutions</span></Link>
                    <ul className="nav-bar__list">
                        <li>
                            <Link
                                className={`nav-bar__link  ${currentLocation.pathname === '/' && 'nav-bar__link--active'}`}
                                href={'/employee'}
                            >Employee List</Link>
                        </li>
                        <li>
                            <Link
                                className={`nav-bar__link  ${currentLocation.pathname === '/about' && 'nav-bar__link--active'}`}
                                href={'/about'}>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
    )
}
