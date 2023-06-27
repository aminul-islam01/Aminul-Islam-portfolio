import project1 from '../assets/images/project1.png'

const Projects = () => {
    return (
        <div>
            <div className="card w-100 h-96 bg-base-100 overflow-hidden">
                <figure><img src={project1} className='absolute top-0 hover:bottom-0 ' /></figure>
            </div>
        </div>
    );
};

export default Projects;