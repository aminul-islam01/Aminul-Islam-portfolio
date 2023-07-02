import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import bootstrap from '../assets/images/bootstrap.png'
import tailwind from '../assets/images/tailwind.png'
import javascript from '../assets/images/js.png'
import react from '../assets/images/react.png'
import mongodb from '../assets/images/mongodb.png'
import express from '../assets/images/express.png'
import firebase from '../assets/images/firebase.png'
import github from '../assets/images/github_919847.png'

const Skills = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div id="skills" className="p-5 mb-16">
            <h2 className="text-3xl font-semibold text-center mb-5">Skills</h2>
            <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                <div data-aos="flip-left" className="card w-100 bg-base-100 shadow-lg hover:scale-110 duration-500 shadow-blue-700">
                    <figure className="px-10 pt-10">
                        <img src={html} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">HTML</h2>
                    </div>
                </div>
                <div data-aos="flip-left" className="card w-100 bg-base-100 shadow-xl hover:scale-110 duration-500 shadow-blue-700">
                    <figure className="px-10 pt-10">
                        <img src={css} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">CSS</h2>
                    </div>
                </div>
                <div data-aos="flip-left" className="card w-100 bg-base-100 shadow-xl hover:scale-110 duration-500 shadow-blue-700">
                    <figure className="px-10 pt-10">
                        <img src={bootstrap} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">BOOTSTRAP</h2>
                    </div>
                </div>
                <div data-aos="flip-left" className="card w-100 bg-base-100 shadow-xl hover:scale-110 duration-500 shadow-blue-700">
                    <figure className="px-10 pt-10">
                        <img src={tailwind} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">TAILWIND</h2>
                    </div>
                </div>
                <div data-aos="flip-left" className="card w-100 bg-base-100 shadow-xl hover:scale-110 duration-500 shadow-blue-700">
                    <figure className="px-10 pt-10">
                        <img src={javascript} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">JAVASCRIPT</h2>
                    </div>
                </div>
                <div data-aos="flip-right" className="card w-100 bg-base-100 shadow-xl hover:scale-110 duration-500 shadow-blue-700">
                    <figure className="px-10 pt-10">
                        <img src={react} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">REACT</h2>
                    </div>
                </div>
                <div data-aos="flip-right" className="card w-100 bg-base-100 shadow-xl hover:scale-110 duration-500 shadow-blue-700">
                    <figure className="px-10 pt-10">
                        <img src={mongodb} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">MONGODB</h2>
                    </div>
                </div>
                <div data-aos="flip-right" className="card w-100 bg-base-100 shadow-xl hover:scale-110 duration-500 shadow-blue-700">
                    <figure className="px-10 pt-10">
                        <img src={express} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">EXPRESS</h2>
                    </div>
                </div>
                <div data-aos="flip-right" className="card w-100 bg-base-100 shadow-xl hover:scale-110 duration-500 shadow-blue-700">
                    <figure className="px-10 pt-10">
                        <img src={firebase} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">FIREBASE</h2>
                    </div>
                </div>
                <div data-aos="flip-right" className="card w-100 bg-base-100 shadow-xl hover:scale-110 duration-500 shadow-blue-700">
                    <figure className="px-10 pt-10">
                        <img src={github} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">GITHUB</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;