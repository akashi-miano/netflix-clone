import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const Nav = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="py-6 absolute z-[999] w-full" role="navigation">
      <div className="container flex justify-between items-center">
        <Link className="text-red-600 uppercase text-4xl font-bold" to="/" n>
          netflix
        </Link>
        {user?.email ? (
          <ul className="flex items-center gap-6">
            <li>
              <Link
                to="/account"
                className="btn capitalize text-lg font-medium text-white"
              >
                Account
              </Link>
            </li>
            <li>
              <button
                className="btn bg-red-600 text-white rounded-md px-8 py-2 capitalize text-lg font-medium"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </li>
          </ul>
        ) : (
          <ul className="flex items-center gap-6">
            <li>
              <Link
                to="/login"
                className="btn capitalize text-lg font-medium text-white"
              >
                sign in
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="btn bg-red-600 text-white rounded-md px-8 py-2 capitalize text-lg font-medium"
              >
                sign up
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
