import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="contact-content p-4">
                <div className="contact-box pt-5">
                    <div className="contact-text pt-5 text-center text-uppercase">
                        <h2 className="contact fw-bold pt-2">contact section</h2>
                    </div>
                    <div className="icons-contact d-flex justify-content-center align-items-center">
                        <div className="leftline-contact m-3">
                        </div>
                        <div className="icon-contact">
                            <i class="bi bi-star-fill"></i>
                        </div>
                        <div className="rightline-contact m-3">
                        </div>
                    </div>
                    <div className="contact-form m-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-8 col-lg-6">
                                    <form>
                                        <div className="form-floating m-4">
                                            <input
                                                type="text"
                                                className="form-control border-0 border-bottom"
                                                id="user-Name"
                                                placeholder="name@example.com"
                                            />
                                            <label htmlFor="user-Name">userName</label>
                                        </div>
                                        <div className="form-floating m-4">
                                            <input
                                                type="uumber"
                                                className="form-control border-0 border-bottom"
                                                id="userAge"
                                                placeholder="name@example.com"
                                            />
                                            <label htmlFor="userAge">userAge</label>
                                        </div>

                                        <div className="form-floating m-4">
                                            <input
                                                type="email"
                                                className="form-control border-0 border-bottom"
                                                id="user-Email"
                                                placeholder="name@example.com"
                                            />
                                            <label htmlFor="user-Email">userEmail</label>
                                        </div>
                                        <div className="form-floating m-4">
                                            <input
                                                type="password"
                                                className="form-control border-0 border-bottom"
                                                id="userPassword"
                                                placeholder="name@example.com"
                                            />
                                            <label htmlFor="userPassword">userPassword</label>
                                        </div>
                                        
                                    </form>
                                    <button className="btn my-btn ms-2 text-white">send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    );
}
