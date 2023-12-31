import './style.scss';

export const Carousel = () => {
    return (
        <div id="carouselExampleControlsNoTouching" className="carousel slide carousel-custom" data-bs-touch="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./photo1.jpeg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./photo2.jpeg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
