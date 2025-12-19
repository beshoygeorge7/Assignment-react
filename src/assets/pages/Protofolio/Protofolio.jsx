import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from 'react';
import image from "../../images/poert1.png"
import images from "../../images/port2.png"
import imagess from "../../images/port3.png"

export default function Protofolio() {
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const handleImageClick = (src) => {
        setModalImage(src);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <Navbar />
            <div className="protofolio-content p-4">
                <div className="protofolio-box pt-5">
                    <div className="protofolio-text pt-5 text-center text-uppercase ">
                        <h2 className="protofolio fw-bold pt-3">portfolio component</h2>
                    </div>
                    <div className="icons-proto d-flex justify-content-center align-items-center">
                        <div className="leftline-protofolio m-3">
                        </div>
                        <div className="icon-protofolio">
                            <i class="bi bi-star-fill"></i>
                        </div>
                        <div className="rightline-protofolio m-3">
                        </div>
                    </div>
                    <div className="container pt-2">
                        <div className="row g-5">
                            <div className=" col-md-6 col-lg-4 ">
                                <div className="image-protofolio position-relative" onClick={() => handleImageClick(image)}>
                                    <img className="w-100 rounded" src={image} alt="" />
                                    <div className="overlay">
                                        <i class="bi bi-plus"></i>
                                    </div>
                                </div>

                            </div>
                            <div className=" col-md-6 col-lg-4 ">
                                <div className="image-protofolio position-relative" onClick={() => handleImageClick(images)}>
                                    <img className="w-100 rounded" src={images} alt="" />
                                    <div className="overlay">
                                        <i
                                            className="bi bi-plus"></i>
                                    </div>
                                </div>

                            </div>
                            <div className=" col-md-6 col-lg-4 ">
                                <div className="image-protofolio position-relative" onClick={() => handleImageClick(imagess)}>
                                    <img className="w-100 rounded" src={imagess} alt="" />
                                    <div className="overlay">
                                        <i className="bi bi-plus"></i>
                                    </div>
                                </div>

                            </div>
                            <div className=" col-md-6 col-lg-4 ">
                                <div className="image-protofolio position-relative" onClick={() => handleImageClick(image)}>
                                    <img className="w-100 rounded" src={image} alt="" />
                                    <div className="overlay">
                                        <i className="bi bi-plus"></i>
                                    </div>
                                </div>

                            </div>
                            <div className=" col-md-6 col-lg-4 ">
                                <div className="image-protofolio position-relative" onClick={() => handleImageClick(images)}>
                                    <img className="w-100 rounded" src={images} alt="" />
                                    <div className="overlay">
                                        <i className="bi bi-plus"></i>
                                    </div>
                                </div>

                            </div>
                            <div className=" col-md-6 col-lg-4 ">
                                <div className="image-protofolio position-relative" onClick={() => handleImageClick(imagess)}>
                                    <img className="w-100 rounded" src={imagess} alt="" />
                                    <div className="overlay">
                                        <i className="bi bi-plus"></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="modal show d-block" onClick={closeModal} >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <img src={modalImage} className="w-100" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}
