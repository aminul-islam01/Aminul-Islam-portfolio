import Lottie from "lottie-react";
import aboutAnimation from '../assets/animationData2.json'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const About = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div id="about" className="grid md:grid-cols-2 items-center bg-base-200">
            <div data-aos="fade-right" className="px-20">
                <Lottie animationData={aboutAnimation} />
            </div>
            <div className="p-5">
                <div data-aos="fade-left">
                    <h1 className="text-3xl font-semibold mb-5 inline-block border-double border-b-4 border-indigo-500">About Me</h1>
                    <p>Hello, I am Aminul Islam Biddut, a MERN Stack Developer from Jamalpur, Bangladesh.
                        I have expertise in HTML, CSS, Bootstrap, Tailwind CSS, and Daisy UI. I am also comfortable working with JavaScript, ES6, MongoDB, React.js, Express.js, React Hook Form, Axios, JWT, React Query, and REST APIs. Additionally, I have familiarity with Node.js and
                        CORS. I am proficient in using tools such as VS Code, GitHub, Netlify, Vercel, Figma, React Dev Tools, and Chrome Dev Tools. Furthermore, I have knowledge of Firebase authentication and deploying projects on the Firebase platform. I consider myself a dedicated and hardworking individual, always striving to improve my skills.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;