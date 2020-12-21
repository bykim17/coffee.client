import React, { useContext } from "react";
import Sytlecss from "../assets/styles/navbar.module.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import Link from "next/link";
import { AuthContext } from "../appState/AuthProvider";
const navbar = () => {
  const { user, signout } = useContext(AuthContext);

  return (
    <div>
      <div>
        <header className={Sytlecss.head}>
          <h className={Sytlecss.text}>Coffee Shop</h>
        </header>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#AA6242" }}
      >
        <Navbar.Brand
          style={{
            fontFamily: "Kanit, sans-serif",
            color: "#FFFFFF",
            fontSize: "20px",
          }}
        >
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/">
              <Nav.Link
                eventKey={2}
                href="/"
                style={{
                  fontFamily: "Kanit, sans-serif",
                  color: "#FFFFFF",
                  fontSize: "20px",
                }}
              >
                หน้าแรก
              </Nav.Link>
            </Link>

            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button
                type="submit"
                style={{
                  backgroundColor: "#AA6242",
                  border: "1.5px solid #ffffff",
                }}
              >
                Search
              </Button>
            </Form>
          </Nav>
          <Nav>
            <Nav.Link
              style={{
                fontFamily: "Kanit, sans-serif",
                color: "#FFFFFF",
                fontSize: "20px",
              }}
            >
              ติดต่อ
            </Nav.Link>

            {user ? (
              <div>
              "สวัสดี คุณ {user.name}"
              <Button onClick={signout}>ออกจากระบบ</Button>
              </div>
              ) : (
              <Link href="/login">
                <Nav.Link
                  eventKey={2}
                  href="/login"
                  style={{
                    fontFamily: "Kanit, sans-serif",
                    color: "#FFFFFF",
                    fontSize: "20px",
                  }}
                >
                  เข้าสู่ระบบ
                </Nav.Link>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default navbar;
