import { Link } from "react-router-dom"

export default function Navigation() {
     return (
        <nav className='flex items-center justify-between w-full h16 py-2 text-white border-b px-28 mb-36 boder-cyan-400 bg-gray-900'>
            <Link to='/' className='text-2xl font-medium text-white'>
                <span className="text-cyan-400">F</span>riends
                <span className="text-cyan-400">N</span>etwork
            </Link>
            <ul className="flex items-center h16 text-xl">
                <li><Link to="/signup">Sign Up</Link></li>
                <li className="pl-20"><Link to="/signin">Sign In</Link></li>
                 
            </ul>
        </nav>
     )
}