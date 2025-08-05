import { BellIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 flex justify-between items-center">
      {/* Left - Logo */}
      <div className="text-lg font-semibold">
        LO-GO
      </div>

      {/* Center - Navigation Links */}
      <ul className="flex space-x-6 text-sm">
        <li className="relative">
          <a href="#" className="hover:underline underline-offset-4">Home</a>
        </li>
        <li>
          <a href="#" className="hover:underline underline-offset-4">Guide</a>
        </li>
        <li className="relative">
          <a href="#" className="border-b-2 border-white">Dashboard</a>
        </li>
        <li>
          <a href="#" className="hover:underline underline-offset-4">About</a>
        </li>
      </ul>

      {/* Right - Icons */}
      <div className="flex items-center space-x-4">
        <BellIcon className="w-5 h-5 cursor-pointer" />
        <UserIcon className="w-5 h-5 cursor-pointer" />
      </div>
    </nav>
  );
}
