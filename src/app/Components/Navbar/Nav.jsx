import "./Nav.css";
const Nav = () => {
  return (
    <div className="navContainer">
      <img
        src="/images/logo.png"
        alt="trixly"
        style={{ marginLeft: "6.94%" }}
      />

      <ul className="flex justify-between items-center text-white w-1/3 font-bold">
        <li>Home</li>
        <li>Services</li>
        <li>Company</li>
        <li>Blog</li>
        <li>Career</li>
      </ul>
      <button
        className="text-white px-5 py-1 border border-white rounded-full"
        style={{ marginRight: "6.94%" }}
      >
        Contact Us
      </button>
    </div>
  );
};

export default Nav;
