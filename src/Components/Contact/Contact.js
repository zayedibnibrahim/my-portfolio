import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
const Contact = () => {
    const [success, setSuccess] = React.useState(false)
    const [error, setError] = React.useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7ibc9ju', 'template_ftliu2l', e.target, 'user_Df5J1N9iPgwEn4Uutx6TW')
            .then((result) => {
                console.log(result);
                if (result) {
                    setSuccess(true)
                    setError(false)
                    console.log(result)
                    e.target.reset();
                }
            }, (error) => {
                if(error){
                    setSuccess(false)
                    setError(true)
                }
            });

    }
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-title text-white">Contact Me</h1>
                    </div>
                </div>
                <div className="row pt-5 pb-5">
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={sendEmail} className="pb-3">
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleInputName" name="from_name" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" name="from_email" required />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputMessage" className="form-label">Message</label><br />
                                <textarea id="exampleInputMessage" cols="85" rows="10" name="message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                        {
                            success && <div className="alert alert-success" role="alert">
                            Thank you, Email has been sent Successfully
                        </div>
                        }
                        {
                            error && <div className="alert alert-danger" role="alert">
                            Something went wrong, Please use valid information
                          </div>
                        }
                        
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;