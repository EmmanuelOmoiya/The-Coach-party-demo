const Navbar = () => {
    return (
         <nav className='navbar'>
             <h1>The Coach party</h1>
             <div className="links">
                 <a href="/" className='alinks'><button className="linksbtn"><span className="linksspan" id='hm'></span></button> Home</a>
                 <a href="/create" className='alinks'><button className="linksbtn"><span className="linksspan" id='np'></span></button> New Page</a>
             </div>
         </nav>   
    );
}
 
export default Navbar;