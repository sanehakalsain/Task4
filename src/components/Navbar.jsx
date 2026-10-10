import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b border-slate-200 bg-white sticky top-0 z-50">
      {/* Logo / Home link */}
      <Link to="/" className="text-lg font-bold text-slate-900 whitespace-nowrap">
        DEV<span className="text-indigo-600">@Deakin</span>
      </Link>

      {/* Search bar (non-functional for now, per spec) */}
      <div className="flex-1 mx-6 max-w-md">
        <input
          type="text"
          placeholder="Search..."
          disabled
          className="w-full px-3 py-1.5 text-sm border border-slate-300 rounded-md bg-slate-50 text-slate-400 cursor-not-allowed"
        />
      </div>

      {/* Post + Login buttons */}
      <div className="flex items-center gap-3">
        <button
          disabled
          className="px-4 py-1.5 text-sm font-medium text-slate-400 border border-slate-200 rounded-md cursor-not-allowed"
        >
          Post
        </button>
        <Link
          to="/login"
          className="px-4 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;