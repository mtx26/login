import React from 'react';
import { Link } from "react-router-dom";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { useContext } from "react";
import { UserContext  } from "../contexts/UserContext";

function Footer() {

  const { userInfo } = useContext(UserContext);
  
  return (
    <MDBFooter bgColor='dark' className='text-white text-center text-lg-start'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Find us on social networks:</span>
        </div>
        <div>
          <a href='https://github.com/mtx26' className='me-4 text-reset'>
            <MDBIcon fab icon="github" size='xl'/>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" /> mtx_26
              </h6>
              <p>Open source project developed by mtx_26</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Navigate</h6>
              <p><Link to="/" className='text-reset'>Home</Link></p>
              <p><Link to="/" className='text-reset'>Title</Link></p>
              {userInfo && userInfo?.role === "admin" && <p><Link to="/admin" className='text-reset'>Admin</Link></p>}
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p><a href='mailto:mtx_26@outlook.be' className='text-reset'>Contact</a></p>
              <p>
                <a href='https://github.com/mtx26/Changelog-generator/blob/php/LICENSE' className='text-reset' target="_blank" rel="noreferrer">
                  MIT License
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; 2025 mtx_26 - All rights reserved
      </div>
    </MDBFooter>
  );
}

export default Footer;
