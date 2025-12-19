import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="about-content vh-100 d-flex justify-content-center align-items-center text-white pt-5 mt-5">
                <div className="about-box">
                    <div className="about-text d-flex justify-content-center align-items-center">
                        <h2 className="about-component text-uppercase fw-bold">about component</h2>
                    </div>
                    <div className="icons-about d-flex justify-content-center align-items-center ">
                        <div className="rightline-about m-3">
                        </div>
                        <div className="icon-a">
                            <i class="bi bi-star-fill"></i>
                        </div>
                        <div className="leftline-about m-3">
                        </div>
                    </div>
                    <div className="about-description">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <p className="text-center m-2">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <p className="text-center m-2">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
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
