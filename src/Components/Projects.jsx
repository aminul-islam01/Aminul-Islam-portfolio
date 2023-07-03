import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'
import Fade from 'react-reveal/Fade';
import { FaArrowRight, FaGithubSquare } from 'react-icons/fa';



const Projects = () => {
    return (
        <div id='projects' className='py-10 bg-base-300'>
            <h2 className='text-3xl font-semibold text-center mb-10'>
                <span className='border-double border-b-4 border-indigo-500'>Projects</span>
            </h2>
            <div className='space-y-14'>
                <div className='md:flex md:flex-row-reverse items-center gap-10 px-10'>
                    <Fade right>
                    <div className="card h-96 md:w-1/2 bg-cover duration-[6s] ease-in hover:bg-bottom"
                        style={{ backgroundImage: `url(${project1})` }}>

                    </div>
                    </Fade>
                    <Fade left>
                    <div className='md:w-1/2 text-center p-10'>
                        <h2 className='text-2xl font-bold mb-5'>Draw-master-class</h2>
                        <p>Different user roles admin, instructor, and student, first registration All user roles will be a student then admin can
                            change their role as Instructor or Admin. An Instructor can add a class and update his class that the class he added.Have a payment method system. Students can purchase a class and give the payment through the payment system.Technologies: Html | CSS | Tailwind | Daisy UI | MERN Stack | MongoDB |Express.js |React.js | Node.js</p>
                           <div className='space-x-5 mt-10'>
                            <a className='font-bold' href="https://github.com/aminul-islam01/draw-master-client" target="_blank" rel="noopener noreferrer">Client site <FaGithubSquare className="inline-block"></FaGithubSquare></a>
                            <a className='font-bold' href="https://github.com/aminul-islam01/draw-master-server" target="_blank" rel="noopener noreferrer">Server site <FaGithubSquare className="inline-block"></FaGithubSquare></a>
                            <a className='font-bold' href="https://draw-master-class.web.app/" target="_blank" rel="noopener noreferrer">Live demo <FaArrowRight className='inline-block'></FaArrowRight></a>
                           </div>
                    </div>
                    </Fade>
                </div>
                <div className='md:flex items-center gap-10 px-10'>
                   <Fade left>
                   <div className="card md:w-1/2 h-96  bg-cover duration-[6s] ease-in hover:bg-bottom"
                        style={{ backgroundImage: `url(${project2})` }}>

                    </div>
                   </Fade>
                    <Fade right>
                    <div className='md:w-1/2 text-center p-10'>
                        <h2 className='text-2xl font-bold mb-5'>Fun-car-play</h2>
                        <p>Fun-car-play is a full-stack website it has a user authentication system. User will be can log in with their email
                            password or google account.Every log-in user will be can add their toy and updates the toy that the toy they are adding.Technologies: Html | CSS | Tailwind | Daisy UI | Sweet alert 2 | MERN Stack | MongoDB |Express.js |React.js |
                            Node.js | Firebase</p>
                            <div className='space-x-5 mt-10'>
                            <a className='font-bold' href="https://github.com/aminul-islam01/fun-car-play-client" target="_blank" rel="noopener noreferrer">Client site <FaGithubSquare className="inline-block"></FaGithubSquare></a>
                            <a className='font-bold' href="https://github.com/aminul-islam01/fun-car-play-server" target="_blank" rel="noopener noreferrer">Server site <FaGithubSquare className="inline-block"></FaGithubSquare></a>
                            <a className='font-bold' href="https://fun-car-play.web.app/" target="_blank" rel="noopener noreferrer">Live demo <FaArrowRight className='inline-block'></FaArrowRight></a>
                           </div>
                    </div>
                    </Fade>
                </div>
                <div className='md:flex md:flex-row-reverse items-center gap-10 px-10'>
                    <Fade right>
                    <div className="card h-96 md:w-1/2 bg-cover duration-[6s] ease-in hover:bg-bottom"
                        style={{ backgroundImage: `url(${project3})` }}>
                       
                    </div>
                    </Fade>
                    <Fade left>
                    <div className='md:w-1/2 text-center p-10'>
                        <h2 className='text-2xl font-bold mb-5'>Cooks-compendium</h2>
                        <p>Cooks-compendium is a full-stack website it has a user authentication system. User will be can log in with their
                            email password or Google and Github account.If logged in user click on view recipe button will take them to recipe details page and then click details button if
                            want to view details of single recipe If users are not logged in then click on view recipe button will take them to
                            login pageTechnologies: Html | CSS | Bootstrap | Sweet alert 2| React leazy loading | MERN Stack | MongoDB |Express.js |
                            React.js | Node.js | Firebase.</p>
                            <div className='space-x-5 mt-10'>
                            <a className='font-bold' href="https://github.com/aminul-islam01/cooks-compendium-client" target="_blank" rel="noopener noreferrer">Client site <FaGithubSquare className="inline-block"></FaGithubSquare></a>
                            <a className='font-bold' href="https://github.com/aminul-islam01/cooks-compendium-server" target="_blank" rel="noopener noreferrer">Server site <FaGithubSquare className="inline-block"></FaGithubSquare></a>
                            <a className='font-bold' href="https://cooks-compendium.web.app/" target="_blank" rel="noopener noreferrer">Live demo <FaArrowRight className='inline-block'></FaArrowRight></a>
                           </div>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Projects;