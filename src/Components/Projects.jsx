import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'

const Projects = () => {
    return (
        <div className='my-10'>
            <h2 className='text-3xl font-semibold text-center my-5'>Projects</h2>
            <div className='space-y-14'>
                <div className='md:flex md:flex-row-reverse gap-10 px-10'>
                    <div className="card h-96 md:w-1/2 bg-cover duration-[6s] ease-in hover:bg-bottom"
                        style={{ backgroundImage: `url(${project1})` }}>
                            
                    </div>
                    <div className='md:w-1/2 text-center p-10'>
                        <h2 className='text-2xl font-bold'>Draw-master-class</h2>
                        <p>Different user roles admin, instructor, and student, first registration All user roles will be a student then admin can
                            change their role as Instructor or Admin. An Instructor can add a class and update his class that the class he added.Have a payment method system. Students can purchase a class and give the payment through the payment system.Technologies: Html | CSS | Tailwind | Daisy UI | MERN Stack | MongoDB |Express.js |React.js | Node.js</p>
                    </div>
                </div>
                <div className='md:flex gap-10 px-10'>
                    <div className="card md:w-1/2 h-96  bg-cover duration-[6s] ease-in hover:bg-bottom"
                        style={{ backgroundImage: `url(${project2})` }}>

                    </div>
                    <div className='md:w-1/2 text-center p-10'>
                        <h2 className='text-2xl font-bold'>Fun-car-play</h2>
                        <p>Fun-car-play is a full-stack website it has a user authentication system. User will be can log in with their email
                            password or google account.Every log-in user will be can add their toy and updates the toy that the toy they are adding.Technologies: Html | CSS | Tailwind | Daisy UI | Sweet alert 2 | MERN Stack | MongoDB |Express.js |React.js |
                            Node.js | Firebase</p>
                    </div>
                </div>
                <div className='md:flex md:flex-row-reverse gap-10 px-10'>
                    <div className="card h-96 md:w-1/2 bg-cover duration-[6s] ease-in hover:bg-bottom"
                        style={{ backgroundImage: `url(${project3})` }}>
                       
                    </div>
                    <div className='md:w-1/2 text-center p-10'>
                        <h2 className='text-2xl font-bold'>Cooks-compendium</h2>
                        <p>Cooks-compendium is a full-stack website it has a user authentication system. User will be can log in with their
                            email password or Google and Github account.If logged in user click on view recipe button will take them to recipe details page and then click details button if
                            want to view details of single recipe If users are not logged in then click on view recipe button will take them to
                            login pageTechnologies: Html | CSS | Bootstrap | Sweet alert 2| React leazy loading | MERN Stack | MongoDB |Express.js |
                            React.js | Node.js | Firebase.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;