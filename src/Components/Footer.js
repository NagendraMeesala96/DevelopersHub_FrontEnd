function Footer() {
  return (
    <footer className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3" style={{ textAlign: "left" }}>
            <h4>ABOUT US</h4>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <p>
              <span style={{ color: "red" }}>
                
              </span>{" "}
              +919989966207
            </p>
            <p>
              <span style={{ color: "red" }}>
                
              </span>{" "}
              Nagendra@gmail.com
            </p>
            <p>
              <span style={{ color: "red" }}>
                
              </span>{" "}
              Bangalore
            </p>
          </div>
          <div className="col-md-3" style={{ textAlign: "left" }}>
            <h4>CATEGORIES</h4>
            <a href="/Products/Feed/hotDeals" className="links">
              Hot deals
            </a>
            <a href="/Products/Feed/Laptops" className="links">
              Laptops
            </a>
            <a href="/Products/Feed/SmartPhones" className="links">
              Smartphones
            </a>
            <a href="/Products/Feed/Cameras" className="links">
              Cameras
            </a>
            <a href="/Products/Feed/Fashion" className="links">
              Fashion
            </a>
          </div>
          <div className="col-md-3" style={{ textAlign: "left" }}>
            <h4>INFORMATION</h4>
            <a href="#" className="links">
              About Us
            </a>
            <a href="#" className="links">
              Contact Us
            </a>
            <a href="#" className="links">
              Privacy Policy
            </a>
            <a href="#" className="links">
              Orders and Returns
            </a>
            <a href="#" className="links">
              Terms & Conditions
            </a>
          </div>
          <div className="col-md-3" style={{ textAlign: "left" }}>
            <h4>SERVICE</h4>
            <a href="#" className="links">
              My Account
            </a>
            <a href="/Products/Feed/cart" className="links">
              View Cart
            </a>
            <a href="#" className="links">
              Wishlist
            </a>
            <a href="#" className="links">
              Track My Order
            </a>
            <a href="#" className="links">
              Help
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
