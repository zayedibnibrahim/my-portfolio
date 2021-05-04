import React from 'react';
import './Contact.css'
const Contact = () => {
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
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputMessage" className="form-label">Message</label><br />
                                <textarea id="exampleInputMessage" cols="85" rows="10"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;