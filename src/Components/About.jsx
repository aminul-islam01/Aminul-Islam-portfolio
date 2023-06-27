import Lottie from "lottie-react";
import aboutAnimation from '../assets/animationData2.json'

const About = () => {
    return (
        <div className="flex items-center">
            <div className="w-1/2 p-20">
                <Lottie animationData={aboutAnimation} />
            </div>
            <div className="w-1/2 p-5">
                <h1 className="text-3xl font-semibold mb-5">About Me</h1>
                <p>Hello, I am Aminul Islam Biddut, a MERN Stack Developer from Jamalpur, Bangladesh.
                    I have expertise in HTML, CSS, Bootstrap, Tailwind CSS, and Daisy UI. I am also comfortable working with JavaScript, ES6, MongoDB, React.js, Express.js, React Hook Form, Axios, JWT, React Query, and REST APIs. Additionally, I have familiarity with Node.js and
                    CORS. I am proficient in using tools such as VS Code, GitHub, Netlify, Vercel, Figma, React Dev Tools, and Chrome Dev Tools. Furthermore, I have knowledge of Firebase authentication and deploying projects on the Firebase platform. I consider myself a dedicated and hardworking individual, always striving to improve my skills.
                </p>
            </div>
        </div>
    );
};

export default About;