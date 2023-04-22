import { Link } from "react-router-dom";

const Navbar = ({ isAuth, signUserOut}) => {
    return (
        <nav>
            <Link to="/"> Home </Link>

            {!isAuth ? (
                <Link to="/login"> Login </Link>
            ) : (
                <>
                    <Link to="/createpost"> Create Post </Link>
                    <button onClick={signUserOut}> Log Out</button>
                </>
            )}
        </nav>
    )
}

export default Navbar;
