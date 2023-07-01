import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import Lottie from "lottie-react";
import animation from '../assets/animation4.json'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ktbqc2w', 'template_8jjw8fl', form.current, 'NN-7Bc_KjbItAb3yo')
            .then((result) => {
                console.log(result.text);
                if(result.text === 'OK') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Message send success',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className='mb-5'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={animation} />
                    </div>
                    <div className="card w-full ">
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                            <div className='flex gap-3'>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="from_name" placeholder="enter your name" className="input input-bordered input-secondary w-full bg-transparent" required/>
                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="from_email" placeholder="enter your email" className="input input-bordered input-secondary w-full bg-transparent" required />
                            </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" name="from_phone" placeholder="enter your phone number" className="input input-bordered input-secondary w-full bg-transparent" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea name="message" id="" cols="30" rows="10" placeholder='write message' className='resize-none textarea textarea-secondary bg-transparent' required></textarea>
                            </div>
                            <div className="mt-6">
                            <button className="btn btn-active btn-secondary">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;