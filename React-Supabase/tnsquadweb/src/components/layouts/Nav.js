import { useNavigate, Link } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext';

const Nav = () => {
    const { user, signOut } = useAuth();
    let navigate = useNavigate()

    async function handleSignout(){
        await signOut() 
        
        navigate("/");
    }

    return (
        <>
        {/*<!-- Navigation--> */}
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="index.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="about.html">About</a></li>
                        <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="post.html">Sample Post</a></li>
                        <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="contact.html">Contact</a></li>
                        {user ? (
                            <li className="nav-item">
                            <a
                              onClick={handleSignout} href="/" 
                              className="nav-link px-lg-3 py-3 py-lg-4"
                            >
                                SignOut
                            </a>
                         </li>
                        ): (
                            <li className="nav-item">
                                <Link className="nav-link px-lg-3 py-3 py-lg-4" to={"/login"}>
                                Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Nav