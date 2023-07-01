import ProgressBar from "@ramonak/react-progress-bar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Skills = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div id="skills" className="p-5 mb-16">
            <h2 className="text-3xl font-semibold text-center mb-5">Skills</h2>
            <div  className="grid md:grid-cols-2 gap-5">
                   <div data-aos="fade-right">
                   <ProgressBar
                        completed={90}
                        bgColor="#f03a3a"
                        labelAlignment="left"
                        labelColor="#ffffff"
                        margin="10px"
                        transitionDuration="3s"
                        animateOnRender
                        maxCompleted={100}
                        customLabel="HTML"
                    />
                    <ProgressBar
                        completed={80}
                        bgColor="#3aa2f0"
                        labelAlignment="left"
                        labelColor="#ffffff"
                        margin="10px"
                        transitionDuration="3s"
                        animateOnRender
                        maxCompleted={100}
                        customLabel="CSS"
                    />
                    <ProgressBar
                        completed={75}
                        bgColor="#3aa2f0"
                        labelAlignment="left"
                        labelColor="#ffffff"
                        margin="10px"
                        transitionDuration="3s"
                        animateOnRender
                        maxCompleted={100}
                        customLabel="Tailwind"
                    />
                    <ProgressBar
                        completed={70}
                        bgColor="#0f29dd"
                        labelAlignment="left"
                        labelColor="#ffffff"
                        margin="10px"
                        transitionDuration="3s"
                        animateOnRender
                        maxCompleted={100}
                        customLabel="Bootstrap"
                    />
                   </div>
                   <div data-aos="fade-left">
                   <ProgressBar
                        completed={70}
                        bgColor="#ffef18"
                        labelAlignment="left"
                        labelColor="#ffffff"
                        margin="10px"
                        transitionDuration="3s"
                        animateOnRender
                        maxCompleted={100}
                        customLabel="Javascript"
                    />
                    <ProgressBar
                        completed={70}
                        bgColor="#18e1ff"
                        labelAlignment="left"
                        labelColor="#ffffff"
                        margin="10px"
                        transitionDuration="3s"
                        animateOnRender
                        maxCompleted={100}
                        customLabel="React"
                    />
                    <ProgressBar
                        completed={60}
                        bgColor="#48c87a"
                        labelAlignment="left"
                        labelColor="#ffffff"
                        margin="10px"
                        transitionDuration="3s"
                        animateOnRender
                        maxCompleted={100}
                        customLabel="MongoDB"
                    />
                    <ProgressBar
                        completed={65}
                        bgColor="#3fae68"
                        labelAlignment="left"
                        labelColor="#ffffff"
                        margin="10px"
                        transitionDuration="3s"
                        animateOnRender
                        maxCompleted={100}
                        customLabel="Express"
                    />
                   </div>
            </div>
        </div>
    );
};

export default Skills;