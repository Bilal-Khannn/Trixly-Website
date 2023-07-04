import Nav from "../../Components/Navbar/Nav";
import "./Landing.css";

const LandingPage = () => {
  return (
    <>
      {/* Fixed button for scrolling to top  */}
      <button className="scrollButton">
        <img src="/images/scroll.svg" alt="scroll" />
      </button>
      <div className="mainContainer">
        {/* Hero section  */}
        <div className="bg-vr-man divStyle">
          {/* Container for text content, image  */}
          <div className="flex flex-col h-full">
            <Nav />
            <div className="flex flex-grow">
              {/* left side  */}
              <div
                className=" flex flex-col"
                style={{ marginLeft: "6.94%", width: "526px", height: "464px" }}
              >
                <h1 className="text-white  font-bold text-7xl leading-95">
                  Welcome Our Page! Get Your Best.
                </h1>
                <h2
                  className="text-white leading-none text-xl"
                  style={{ marginTop: "4.09%" }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has
                </h2>
                <div style={{ marginTop: "13.8%" }}>
                  <button className="text-white mr-16 px-6 py-2 border border-white rounded-full ">
                    Get Started
                  </button>
                </div>
              </div>
              {/* right side  */}
              <div className="bg-red-200 imageHero">
                <img src="/images/3D.png" alt="3D image" />
              </div>
            </div>
          </div>
        </div>

        {/* Companies  */}
        <div>
          <h1>second</h1>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
