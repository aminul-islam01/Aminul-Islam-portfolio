import { TypeAnimation } from 'react-type-animation';
import Lottie from "lottie-react";
import animationData2 from '../assets/animation3.json'

const Banner = () => {

    return (
        <div className='flex h-screen items-center'>
            <div className='w-1/2 p-10'>
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
                    style={{ fontSize: '2em', color: 'red', fontWeight: 'bold' }}
                    repeat={Infinity}
                />
                <p>Through my expertise as a MERN stack developer, I have the ability to build web applications that deliver exceptional results. By harnessing the power of MongoDB, Express.js, React.js, and Node.js, I create dynamic, efficient, and scalable websites that cater to your specific needs.</p>
                <button className="btn btn-outline btn-primary mt-5">Download Resume</button>
            </div>
            <div className='bg-green-transparent w-1/2'>
            <Lottie animationData={animationData2}/>
            </div>
        </div>
    );
};

export default Banner;