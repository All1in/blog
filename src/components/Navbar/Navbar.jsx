import { Link } from "react-router-dom";

const Navbar = ({ isAuth }) => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/createpost'>Create Post</Link>
            {!isAuth && <Link to='/login'>Login</Link>}
        </nav>
    )
}

export default Navbar;
