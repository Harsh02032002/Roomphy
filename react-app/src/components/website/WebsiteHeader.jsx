import React, { useMemo } from "react";

const logoUrl =
  "https://res.cloudinary.com/dpwgvcibj/image/upload/v1768990260/roomhy/website/logoroomhy.png";

const getActivePath = () => {
  if (typeof window === "undefined") return "";
  return window.location?.pathname || "";
};

const linkClass = (active) =>
  active
    ? "text-blue-600 font-semibold transition-colors"
    : "text-gray-600 hover:text-blue-600 font-medium transition-colors";

export default function WebsiteHeader() {
  const activePath = useMemo(getActivePath, []);

  return (
    <>
      <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <a href="/website/index" className="flex-shrink-0">
                <img src={logoUrl} alt="Roomhy Logo" className="h-10 w-auto" />
              </a>
            </div>

            <div className="flex items-center gap-3 sm:gap-6">
              <nav className="hidden lg:flex items-center space-x-6">
                <a href="/website/about" className={linkClass(activePath === "/website/about")}>
                  About Us
                </a>
                <a href="/website/contact" className={linkClass(activePath === "/website/contact")}>
                  Contact
                </a>
              </nav>

              <a
                href="/website/list"
                className="flex-shrink-0 flex items-center space-x-1 px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                <i data-lucide="plus-circle" className="w-4 h-4" />
                <span>
                  Post <span className="hidden sm:inline">Your</span> Property
                </span>
              </a>

              <button
                id="menu-toggle"
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Open menu"
              >
                <i data-lucide="menu" className="w-7 h-7 text-gray-800" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div id="menu-overlay" className="fixed inset-0 bg-black/50 z-40 hidden" />

      <div
        id="mobile-menu"
        className="fixed top-0 right-0 w-80 h-full bg-white z-50 shadow-xl transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col"
      >
        <div className="flex justify-end p-4 flex-shrink-0">
          <button id="menu-close" className="p-2" aria-label="Close menu">
            <i data-lucide="x" className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <div id="menu-logged-in" className="hidden flex flex-col h-full">
          <div className="flex justify-between items-center px-6 py-2">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <i data-lucide="user" className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-semibold text-gray-800" id="welcomeUserName">
                  Hi, welcome
                </span>
                <p className="text-xs text-gray-500" id="userIdDisplay" />
              </div>
            </div>
            <a href="/website/profile" className="text-sm font-medium text-blue-600 hover:underline">
              Profile
            </a>
          </div>

          <div className="px-6 py-4">
            <div className="border border-blue-200 rounded-lg p-4 relative overflow-hidden">
              <p className="font-semibold text-gray-800 mb-3 relative z-10">
                Looking to Sell/Rent your Property?
              </p>
              <a
                href="/website/list"
                className="block text-center w-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 px-4 rounded-lg text-sm transition-colors relative z-10"
              >
                Post Property for Free
              </a>
            </div>
          </div>

          <nav className="flex-grow p-4 space-y-1 overflow-y-auto">
            <a href="/website/ourproperty" className="flex items-center space-x-4 p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <i data-lucide="home" className="w-5 h-5 text-blue-600" />
              </div>
              <span>Our Properties</span>
            </a>
            <a href="/website/fav" className="flex items-center space-x-4 p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <i data-lucide="heart" className="w-5 h-5 text-red-600" />
              </div>
              <span>Favorites</span>
            </a>
            <a href="/website/mystays" className="flex items-center space-x-4 p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <i data-lucide="building" className="w-5 h-5 text-purple-600" />
              </div>
              <span>My Stays</span>
            </a>
            <a href="/website/about" className="flex items-center space-x-4 p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600">
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <i data-lucide="info" className="w-5 h-5 text-yellow-600" />
              </div>
              <span>About Us</span>
            </a>
            <a href="/website/contact" className="flex items-center space-x-4 p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600">
              <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                <i data-lucide="phone" className="w-5 h-5 text-cyan-600" />
              </div>
              <span>Contact Us</span>
            </a>
            <a href="/website/websitechat" className="flex items-center space-x-4 p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <i data-lucide="message-circle" className="w-5 h-5 text-green-600" />
              </div>
              <span>Chat</span>
            </a>
          </nav>

          <div className="p-4 border-t flex-shrink-0">
            <button
              onClick={function (event) {
                try {
                  return Function("event", "globalLogout()").call(event.currentTarget, event);
                } catch (err) {
                  console.error(err);
                }
              }}
              className="w-full flex items-center space-x-4 p-3 rounded-lg text-red-600 hover:bg-red-50"
            >
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <i data-lucide="log-out" className="w-5 h-5 text-gray-600" />
              </div>
              <span>Logout</span>
            </button>
          </div>
        </div>

        <div id="menu-logged-out" className="flex flex-col h-full">
          <div className="flex-grow p-4 space-y-1 overflow-y-auto">
            <a href="/website/about" className="flex items-center space-x-4 p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600">
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <i data-lucide="info" className="w-5 h-5 text-yellow-600" />
              </div>
              <span>About Us</span>
            </a>
            <a href="/website/contact" className="flex items-center space-x-4 p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600">
              <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                <i data-lucide="phone" className="w-5 h-5 text-cyan-600" />
              </div>
              <span>Contact Us</span>
            </a>
            <a href="/website/login" className="flex items-center space-x-4 p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <i data-lucide="log-in" className="w-5 h-5 text-blue-600" />
              </div>
              <span>Login</span>
            </a>
            <a href="/website/signup" className="flex items-center space-x-4 p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <i data-lucide="user-plus" className="w-5 h-5 text-purple-600" />
              </div>
              <span>Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

