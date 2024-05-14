const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
        </div>
        <div>
            <p>Also Available on</p>
            <div className="brand-icons">
                <img src="/amazon.png" alt="amazon" />
                <img src="/flipkart.png" alt="flipkart" />
            </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="hero-image.png" alt="jutta" />
      </div>
    </main>
  );
};
export default HeroSection;
