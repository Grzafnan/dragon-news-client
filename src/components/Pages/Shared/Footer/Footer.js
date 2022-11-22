import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';

const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNPAC1V0LGIxXL_7iHKXImT2pxGDLTdgWqw&usqp=CAU"
              width="30px"
            />
            <span className="ml-4 h5 mb-0 font-weight-bold">Dragon News</span>
          </a>
        </CDBBox>
        <CDBBox>
          <small className="ml-2">&copy; Dragon News, {(new Date().getFullYear())}. All rights reserved by <a href="https://www.linkedin.com/in/grzafnan/">Shakil Ahmmed</a>.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;