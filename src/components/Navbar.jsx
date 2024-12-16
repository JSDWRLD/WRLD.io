import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-12 h-12 rounded-lg bg-grey items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">JSD</p> 
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-white' : 'text-slate-500'}>
                About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-white' : 'text-slate-500'}>
                Contact
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-white' : 'text-slate-500'}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar