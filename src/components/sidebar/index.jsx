const Sidebar = ({ isOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Overlay only for small screens when sidebar is open */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:block
        `}
      >
        <div className="lg:hidden flex items-center justify-between px-4 py-2.5 font-bold text-lg border-b">
          <div>Menu</div>

          {/* Close button only on small screens */}
          <div
            className="py-2"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </div>
        </div>

        <ul className="p-4 space-y-2">
          <li className="hover:bg-gray-100 p-2 rounded">Dashboard</li>
          <li className="hover:bg-gray-100 p-2 rounded">Profile</li>
          <li className="hover:bg-gray-100 p-2 rounded">Settings</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
