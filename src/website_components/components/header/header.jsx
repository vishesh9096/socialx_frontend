import { ArrowDown } from "../icons/arrow-down"
import { useState } from 'react';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function Layout({ children }) {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownVisible(!isDropdownVisible);
    };
    const router = useRouter();

    const handleLogout = () => {
        deleteCookie('token');
        // You can add any additional logout logic here, like redirecting to a login page
        router.push('/login');

      };
  
  return (
    <div className="py-2 px-6 p-3 bg-[#FFFFFF] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
      <button type="button" className="text-lg text-black sidebar-toggle">
        Name Generator
      </button>
      <ul className="ml-auto flex items-center">
        <button id="fullscreen-button">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.77778 3.55556C2.24927 3.55556 2.70146 3.36825 3.03486 3.03486C3.36825 2.70146 3.55556 2.24927 3.55556 1.77778C3.55556 1.30628 3.36825 0.854097 3.03486 0.520699C2.70146 0.187301 2.24927 0 1.77778 0C1.30628 0 0.854097 0.187301 0.520699 0.520699C0.187301 0.854097 0 1.30628 0 1.77778C0 2.24927 0.187301 2.70146 0.520699 3.03486C0.854097 3.36825 1.30628 3.55556 1.77778 3.55556ZM8 3.55556C8.4715 3.55556 8.92368 3.36825 9.25708 3.03486C9.59048 2.70146 9.77778 2.24927 9.77778 1.77778C9.77778 1.30628 9.59048 0.854097 9.25708 0.520699C8.92368 0.187301 8.4715 0 8 0C7.5285 0 7.07632 0.187301 6.74292 0.520699C6.40952 0.854097 6.22222 1.30628 6.22222 1.77778C6.22222 2.24927 6.40952 2.70146 6.74292 3.03486C7.07632 3.36825 7.5285 3.55556 8 3.55556ZM14.2222 3.55556C14.6937 3.55556 15.1459 3.36825 15.4793 3.03486C15.8127 2.70146 16 2.24927 16 1.77778C16 1.30628 15.8127 0.854097 15.4793 0.520699C15.1459 0.187301 14.6937 0 14.2222 0C13.7507 0 13.2985 0.187301 12.9651 0.520699C12.6317 0.854097 12.4444 1.30628 12.4444 1.77778C12.4444 2.24927 12.6317 2.70146 12.9651 3.03486C13.2985 3.36825 13.7507 3.55556 14.2222 3.55556ZM1.77778 9.77778C2.24927 9.77778 2.70146 9.59048 3.03486 9.25708C3.36825 8.92368 3.55556 8.4715 3.55556 8C3.55556 7.5285 3.36825 7.07632 3.03486 6.74292C2.70146 6.40952 2.24927 6.22222 1.77778 6.22222C1.30628 6.22222 0.854097 6.40952 0.520699 6.74292C0.187301 7.07632 0 7.5285 0 8C0 8.4715 0.187301 8.92368 0.520699 9.25708C0.854097 9.59048 1.30628 9.77778 1.77778 9.77778ZM8 9.77778C8.4715 9.77778 8.92368 9.59048 9.25708 9.25708C9.59048 8.92368 9.77778 8.4715 9.77778 8C9.77778 7.5285 9.59048 7.07632 9.25708 6.74292C8.92368 6.40952 8.4715 6.22222 8 6.22222C7.5285 6.22222 7.07632 6.40952 6.74292 6.74292C6.40952 7.07632 6.22222 7.5285 6.22222 8C6.22222 8.4715 6.40952 8.92368 6.74292 9.25708C7.07632 9.59048 7.5285 9.77778 8 9.77778ZM14.2222 9.77778C14.6937 9.77778 15.1459 9.59048 15.4793 9.25708C15.8127 8.92368 16 8.4715 16 8C16 7.5285 15.8127 7.07632 15.4793 6.74292C15.1459 6.40952 14.6937 6.22222 14.2222 6.22222C13.7507 6.22222 13.2985 6.40952 12.9651 6.74292C12.6317 7.07632 12.4444 7.5285 12.4444 8C12.4444 8.4715 12.6317 8.92368 12.9651 9.25708C13.2985 9.59048 13.7507 9.77778 14.2222 9.77778ZM1.77778 16C2.24927 16 2.70146 15.8127 3.03486 15.4793C3.36825 15.1459 3.55556 14.6937 3.55556 14.2222C3.55556 13.7507 3.36825 13.2985 3.03486 12.9651C2.70146 12.6317 2.24927 12.4444 1.77778 12.4444C1.30628 12.4444 0.854097 12.6317 0.520699 12.9651C0.187301 13.2985 0 13.7507 0 14.2222C0 14.6937 0.187301 15.1459 0.520699 15.4793C0.854097 15.8127 1.30628 16 1.77778 16ZM8 16C8.4715 16 8.92368 15.8127 9.25708 15.4793C9.59048 15.1459 9.77778 14.6937 9.77778 14.2222C9.77778 13.7507 9.59048 13.2985 9.25708 12.9651C8.92368 12.6317 8.4715 12.4444 8 12.4444C7.5285 12.4444 7.07632 12.6317 6.74292 12.9651C6.40952 13.2985 6.22222 13.7507 6.22222 14.2222C6.22222 14.6937 6.40952 15.1459 6.74292 15.4793C7.07632 15.8127 7.5285 16 8 16ZM14.2222 16C14.6937 16 15.1459 15.8127 15.4793 15.4793C15.8127 15.1459 16 14.6937 16 14.2222C16 13.7507 15.8127 13.2985 15.4793 12.9651C15.1459 12.6317 14.6937 12.4444 14.2222 12.4444C13.7507 12.4444 13.2985 12.6317 12.9651 12.9651C12.6317 13.2985 12.4444 13.7507 12.4444 14.2222C12.4444 14.6937 12.6317 15.1459 12.9651 15.4793C13.2985 15.8127 13.7507 16 14.2222 16Z"
              fill="#4B4652"
            />
          </svg>
        </button>

        <li className="dropdown ml-3">
          <button type="button" className="dropdown-toggle flex items-center">
            <div className="flex-shrink-0 w-10 h-10 relative">
              <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg"
                  alt=""
                />
                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"></div>
                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div>
              </div>
            </div>
            <div className="p-2 md:block text-left">
              <h2 className="text-sm font-semibold text-gray-800">John Doe</h2>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </button>

          
        </li>
        <li className="dropdown ml-3">
        <button onClick={toggleDropdown} >
        <ArrowDown />
      </button>
          <ul className={`dropdown-menu shadow-md shadow-black/5 z-30 py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px] absolute right-0 pt-3 ${isDropdownVisible ? '' : 'hidden'}`}>
            <li>
              <a
                href="#"
                className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50"
              >
                Settings
              </a>
            </li>
            <li>
              <form method="POST" action="">
                <a
                  role="menuitem"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50 cursor-pointer"
                  onClick={handleLogout}
                >
                  Log Out
                </a>
              </form>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
