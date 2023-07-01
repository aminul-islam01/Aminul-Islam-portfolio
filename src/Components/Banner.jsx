import { TypeAnimation } from 'react-type-animation';
import Lottie from "lottie-react";
import animationData2 from '../assets/animation3.json'

const Banner = () => {

    return (
        <div id='home' className='md:h-screen grid md:grid-cols-2 items-center bg-base-300'>
            <div className='p-10 my-20'>
                <h2 className='text-4xl font-bold'>Hi, I am Aminul Islam Biddut</h2>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'I am a WEB DEVELOPER',
                        1000,
                        'I am a FRONT-END DEVELOPER',
                        1000,
                        'I am a MERN STACK DEVELOPER ',
                        1000,
                    ]}
                    speed={50}
                    style={{ fontSize: '2em', color: 'blue', fontWeight: 'bold' }}
                    repeat={Infinity}
                />
                <p>Through my expertise as a MERN stack developer, I have the ability to build web applications that deliver exceptional results. By harnessing the power of MongoDB, Express.js, React.js, and Node.js, I create dynamic, efficient, and scalable websites that cater to your specific needs.</p>
                <button className="btn btn-outline btn-primary mt-5">
                    <a href="/public/Aminul Islam Biddut-Resume.pdf" download>Download Resume</a>
                </button>
            </div>
            <div className='bg-green-transparent'>
                <Lottie animationData={animationData2} />
            </div>
        </div>
    );
};

export default Banner;