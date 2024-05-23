import React from 'react'
import './Section1.scss'
const Section1 = () => {
  return (
    <section className='section1'>
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <div className='salam'>
                <span>Welcome</span>
                <h1>WINES FOR EVERYONE</h1>
                </div>
                <img src="https://preview.colorlib.com/theme/wines/images/hero_2.jpg.webp" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <div className="salam">
                <span>Royal Wine</span>
                <h1>GRAPE WINE</h1>
                </div>
                <img src="https://preview.colorlib.com/theme/wines/images/hero_1.jpg.webp" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>
  )
}

export default Section1
