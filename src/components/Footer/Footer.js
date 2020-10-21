import React from 'react';
import { MDBContainer } from "mdbreact";
import '../AppNav/AppNav.css';

const Footer = () => {
    return (
        <div>
            <footer className="page-footer fondoR centrar">
                <div className="row">
                    <div className="col-md-12 py-5">
                        <a className="fb-ic" href="https://www.facebook.com/LoowisTv/" target="_blank" style={{ color: 'white' }}>
                            <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                        </a>
                        <a className="tw-ic" href="https://discord.gg/3husp4n" target="_blank" style={{ color: 'white' }}>
                            <i className="fab fa-discord fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                        </a>
                        <a className="ins-ic" href="https://www.instagram.com/loowistv/" target="_blank" style={{ color: 'white' }}>
                            <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                        </a>
                    </div>
                </div>
            </footer>
            <div className="footer-copyright text-center py-3 tLetra fondoF">
                <MDBContainer fluid style={{ color: 'white' }}>
                    &copy; {new Date().getFullYear()} Copyright. Designed with ♥ by: <a href="https://stephanie.netlify.app/" style={{ color: 'white' }} target="_blank"> Ing. Stephanie Sandoval.</a>
                </MDBContainer>
            </div>
        </div>
    )
}

export default Footer
