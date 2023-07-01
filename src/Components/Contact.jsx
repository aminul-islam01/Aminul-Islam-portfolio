import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';

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
        <div className='mb-5'>
            {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="from_name" />
                <label>Email</label>
                <input type="email" name="from_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="from_name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="from_email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" name="from_phone" placeholder="Phone" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea name="message" id="" cols="30" rows="10" className='resize-none p-2 border '></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;