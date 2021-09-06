// import area

import React from "react"
import { Component } from "react";

class App extends Component {
    render() {
        return (
            <>
                <header>
                    {/* --header-top-- */}
                    <div className="header-top"></div>
                    <div className="header-bottom"></div>
                </header>
                {/* ---MainArea---Start-- */}
                <section className="main_area">
                <div className="main position-relative">
                    <div className="b_main1">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="../Images/Slider/4th.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="../Images/Slider/2nd.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="../Images/Slider/1st.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="../Images/Slider/3red.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="../Images/Slider/5th.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="../Images/Slider/6th.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="../Images/Slider/8th.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="../Images/Slider/9th.jpg" className="d-block w-100" alt="..." />
                            </div>
                           
                        </div>
                        <button className="carousel-control-prev h-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next h-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    </div>
                    {/* --B_main2-Start-- */}
                     <div className="b_main2 position-absolute start-0 w-100">

                     </div>
                    {/* --B_main2-End-- */}
                </div>
                {/* ---MainArea---End-- */}
                </section>
                {/* ---footer--Start-- */}
                <footer>

                </footer>
                {/* ---footer--End-- */}
            </>
        )
    }
}
export default App