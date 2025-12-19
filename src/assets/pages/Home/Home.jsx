import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import img from "../../images/avataaars.svg"

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="home-content p-5">
                <div className="home-box pt-5">
                    <div className="home-image d-flex justify-content-center align-items-center pt-5">
                        <img className="w-25" src={img} alt="" />
                    </div>
                    <div className="home-text text-white m-5 ">
                        <h2 className="text-center text-uppercase fw-bold">start framework</h2>
                        <div className="group d-flex justify-content-center align-items-center py-1">
                            <div className="left-line m-3">
                            </div>
                            <div className="icon-home">
                                <i class="bi bi-star-fill"></i>
                            </div>
                            <div className="right-line m-3">
                            </div>
                        </div>
                        <p className="text-center py-1  ">Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
            </div>


            <Footer />




        </>
    );
}
