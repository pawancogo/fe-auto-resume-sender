import { Link } from "react-router-dom";

Link
const Header = ({ onToggleSidebar }) => {
  const isLoggedIn = false; // Replace with actual auth logic

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md"
      style={{ borderBottom: '1px solid grey' }}>
      <div className="flex items-center gap-4">
        {/* Hamburger - hidden on lg screens */}
        <button className="lg:hidden text-2xl" onClick={onToggleSidebar}>
          ☰
        </button>
        <h3 className="text-l font-bold"><span className="text-yellow-500">Resume</span> <span className="text-violet-500">Sender</span></h3>
      </div>

      <div>
        {isLoggedIn ? (
          <img
            src="/avatar.png"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <div className="space-x-2 text-blue-500 font-bold">
            <Link to='/signin'><button>Sign In</button></Link>
            <Link to='/signup'><button>
              Sign Up
            </button></Link>
          </div>

        )}
      </div>
    </header>
  );
};

export default Header;
