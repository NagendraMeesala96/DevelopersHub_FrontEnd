import React, { Fragment } from "react";
import "../App";
import { Link } from "react-router-dom";
let Home = () => {
  return (
    <Fragment>
      <section className="body">
        <nav className="navbar bg-dark text-white navbar-dark navbar-expand-lg p-3">
          <div className="container">
            <a href="#" className="navbar-brand">
              <i class="fa fa-code"></i>
              &nbsp;Developers Hub
            </a>
            <div className="collapse navbar-collapse"></div>
            <Link to={"/login"}>
              <button className="btn btn-outline-light">
                <i className="fa fa-sign-in pr-2" aria-hidden="true"></i>&nbsp;
                LogIn
              </button>
            </Link>
            &nbsp;&nbsp;
            <Link to={"/SignUp"}>
              <button className="btn btn-outline-info">
                <i className="fas fa-user-plus pr-2"></i>&nbsp; SingUp
              </button>
            </Link>
          </div>
        </nav>
        <section>
          <div className="heading">
            <h1 className="text-white text-center">DEVELOPERS HUB</h1>
            <p className="text-white text-center">
              Create a developer profile share posts and get help from other
              developers
            </p>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default Home;
