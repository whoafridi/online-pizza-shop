const Footer = () => {
    return (
      <div className="container footer">
        <div className="row">
          <div className="col-md-3 mt-5 col-sm-12">
            <h3 className="title">PizzaShop</h3>
            <p className="title ">
              PizzaShop, a pizza based web which aims to provide you best services
              for aroud the globe. You all can find and serve better services with
              us.
            </p>
            <p className="title">12/2, Dhanmondi 3-A, Dhaka-1209</p>
            <p className="title">info@r.com</p>
            <p className="title">Hotline: 0980987665</p>
          </div>
          <div className="col-md-3 mt-5 col-sm-12">
            <h2 className="title">About company</h2>
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <p className="title">Home</p>
                <p className="title">About</p>
                <p className="title">Contact</p>
              </div>
              <div className="col-md-6 col-sm-6">
                <p className="title">Blog</p>
                <p className="title">Services</p>
                <p className="title">FAQs</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5 col-sm-12">
            <h2 className="title">Our services</h2>
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <p className="title">Regsitration</p>
                <p className="title">Order pizza</p>
                <p className="title">Buy pizza</p>
              </div>
              <div className="col-md-6 col-sm-6">
                <p className="title">Login</p>
                <p className="title">Review</p>
                <p className="title">Payment</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5 col-sm-12">
            <h2 className="title">Payment</h2>
            <img
              src="https://e-commerce-fa971.web.app/static/media/payment.9058ba4d.jpg"
              className="img-fluid h-50 w-100" loading="lazy" alt="none"
            />
          </div>
          <hr />
          <div className="row d-flex justify-content-between mt-5">
            <div className="text-center title col-md-6">
              Copyright © 2022 PizzaShop - All Rights Reserved.
            </div>
            <div className="icons col-md-6">
              <h5>
                <i className="bx bxl-facebook-circle"></i>
              </h5>
              <h5>
                <i className="bx bxl-twitter"></i>
              </h5>
              <h5>
                <i className="bx bxl-linkedin"></i>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;