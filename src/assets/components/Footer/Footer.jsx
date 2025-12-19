export default function Footer() {
    return (
        <>
            <footer className="app-footer text-white">
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="footer-info">
                                <h3>LOCATION</h3>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="footer-text ">
                                <h3>AROUND THE WEB</h3>
                                <div className="social-icons d-flex jusiy-content-center align-items-center ms-4">
                                    <div className="icon-facebook p-2 m-1">
                                        <i className="bi bi-facebook "></i>
                                    </div>
                                    <div className="icon-twitter p-2 m-1">
                                        <i className="bi bi-twitter"></i>
                                    </div>
                                    <div className="icon-linkedin p-2 m-1">
                                        <i class="bi bi-linkedin"></i>
                                    </div>
                                    <div className="icon-globe p-2 m-1">
                                        <i class="bi bi-globe "></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="footer-description">
                                <h3>ABOUT FREELANCER</h3>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright p-3">
                    <p className="text-center">Copyright © Your Website 2021</p>
                </div>
            </footer>






        </>
    );
}
