import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container, 
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderApp = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/san-pham">Sản phẩm</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/gioi-thieu">Giới thiệu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/chuong-trinh-khuyen-mai">Khuyến mãi</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/chinh-sach-gia-si">Đại lý</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/lien-he">Liên hệ</NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </Container>
  );
}

export default HeaderApp;