import'./Home.css'
import logo from "./logo-r.jpg"

function Navbar(){
  return (
  <div className='datas'>
     <a className="logo"><img src={logo} /></a>
     <nav className='navbar'>
   <b className="link1">Home</b>
    <b className="link2">Studio</b>
    <b className="link3">Works</b>
    <b className="link4">Contact</b>
    <b className="logosearch">🔍</b>
    <button class="rounded-md bg-pink-500 hover:bg-pink-600 text-white p-2 relative"><b>Hire Now</b></button>
    </nav>
  </div>
  );
}

export default Navbar;