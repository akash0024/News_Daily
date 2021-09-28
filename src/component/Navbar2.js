import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar2 extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsDaily
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link className="nav-a active" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-a dropdown-toggle"
                      to="/"
                      id="offcanvasNavbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categories
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="offcanvasNavbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/general">
                        General
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/business">
                         Business
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/health">
                        Health
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/science">
                       Science
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/sports">
                        Sports
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/entertainment">
                         Entertainment
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/technology">
                        Technology
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
