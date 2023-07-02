import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import logo from '../assets/images/logo.png'


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-300 text-base-content">
                <div>
                    <a>
                        <img className="w-80 cursor-pointer" src={logo} alt="" />
                    </a>
                    <div className="space-x-3">
                        <span className="cursor-pointer"><FaEnvelope className="inline-block"></FaEnvelope> aminulislambiddut1@gmail.com</span>
                        <span className="cursor-pointer"><FaPhoneAlt className="inline-block"></FaPhoneAlt> +8801922112718</span>
                        <span className="cursor-pointer"><FaMapMarkerAlt className="inline-block"></FaMapMarkerAlt> Jamalpur, Bangladesh</span>
                    </div>
                    <p>Copyright © 2023 - All right reserved by Aminul Islam Biddut</p>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <div className="grid grid-flow-col gap-4 text-2xl text-blue-500">
                            <a className="text-2xl hover:scale-150 duration-500" href="https://www.linkedin.com/in/aminul-islam-biddut-689137280/" target="_blank" rel="noopener noreferrer"><FaLinkedin></FaLinkedin></a>
                            <a className="text-2xl hover:scale-150 duration-500" href="https://github.com/aminul-islam01" target="_blank" rel="noopener noreferrer"><FaGithub></FaGithub></a>
                            <a className="text-2xl hover:scale-150 duration-500" href="https://web.facebook.com/aminul202" target="_blank" rel="noopener noreferrer"><FaFacebook></FaFacebook></a>
                            <a className="text-2xl hover:scale-150 duration-500" href="#" ><FaTwitter></FaTwitter></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;