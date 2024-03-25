function Navbar(){
  return ( 
<div className="navbar bg-base-100 text-white">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">What is bro cooking</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>ola</a></li>
      <li>
        <details>
          <summary>
            Dropdown
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  );
}

export default Navbar;