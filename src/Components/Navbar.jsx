import { useEffect } from "react";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from '../assets/images/logo.png'

const Navbar = () => {

  const [dark, setDark] = useState(false);


    useEffect(() => {
        const myTheme = localStorage.getItem('myTheme');
        if(myTheme === 'dark'){
            setDark(true)
        }else{
            setDark(false)
        }
        document.querySelector('html').setAttribute('data-theme', myTheme)
    }, [dark])

    const handleTheme = (event) => {
        if(event === true){
            localStorage.setItem('myTheme', 'dark')
            setDark(!dark)
        }else{
            localStorage.setItem('myTheme', 'light')
            setDark(!dark)
        }
    }


    const navItem = <>
        <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} >
          HOME
        </Link>
        </li>
        <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} >
          ABOUT
        </Link>
        </li>
        <li><Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} >
          Skills
        </Link>
        </li>
        <li><Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} >
          PROJECT
        </Link>
        </li>
        <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} >
          CONTACT
        </Link>
        </li>
    </>
    return (
        <div className="navbar sticky top-0 left-0 z-10 bg-base-100 opacity-80">
            <div className="navbar-start flex-1">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navItem}
                    </ul>
                </div>
                <a>
                    <img className="w-80 cursor-pointer" src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    {navItem}
                </ul>
            </div>
            <span className="text-3xl ms-auto cursor-pointer">
                {dark === false? <FaMoon onClick={() => handleTheme(true)}></FaMoon>
                :<FaSun onClick={() => handleTheme(false)}></FaSun>}
            </span>
        </div>
    );
};

export default Navbar;