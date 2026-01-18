import { Link } from "react-router-dom";
import { GiGraduateCap } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800 px-4 md:px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-16 flex-wrap">
        {/* Company Details */}
        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <div className="icon flex items-center justify-center border rounded-md bg-violet-700 p-2">
              <GiGraduateCap className="text-white w-6 h-6" />
            </div>
            <h1 className="text-base font-bold">CA Monk</h1>
          </div>
          <p className="text-gray-300 text-sm md:text-base max-w-md">
            Empowering the next generation of financial leaders with tools,
            community, and knowledge.
          </p>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="#" className="text-gray-500 hover:text-violet-400">
                Blog
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-500 hover:text-violet-400">
                Webinars
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-500 hover:text-violet-400">
                Case Study
              </Link>
            </li>
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h3 className="font-semibold mb-3">Platform</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="#" className="text-gray-500 hover:text-violet-400">
                Job Board
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-500 hover:text-violet-400">
                Practice Tests
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-500 hover:text-violet-400">
                Mentorship
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="#" className="text-gray-500 hover:text-violet-400">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-500 hover:text-violet-400">
                Twitter
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-500 hover:text-violet-400">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-10 pt-6 border-t border-gray-800 text-gray-500 text-sm md:text-base">
        © 2026 CA Monk. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
