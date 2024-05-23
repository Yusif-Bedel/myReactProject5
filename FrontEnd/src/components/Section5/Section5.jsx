import React from "react";
import "./Section5.scss";
const Section5 = () => {
  return (
    <section className="section5">
      <div className="container">
        <h2>Wine's Blog</h2>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</span>
        <a href="#">View All Products <i class="fa-solid fa-arrow-right"></i></a>
        <div className="s5Cards">
            <div className="s5Card">
                <img src="https://preview.colorlib.com/theme/wines/images/img_1.jpg" alt="" />
                <h4>What You Need To Know About Premium Rosecco</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                <span>Dave Rogers in News</span>
            </div>
            <div className="s5Card">
                <img src="https://preview.colorlib.com/theme/wines/images/img_1.jpg" alt="" />
                <h4>What You Need To Know About Premium Rosecco</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                <span>Dave Rogers in News</span>
            </div>
            <div className="s5Card">
                <img src="https://preview.colorlib.com/theme/wines/images/img_1.jpg" alt="" />
                <h4>What You Need To Know About Premium Rosecco</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                <span>Dave Rogers in News</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
