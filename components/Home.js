const Home = () => (
  // <!-- HOME -->
  <section id="home" class="parallax-section">
    <div class="overlay" />
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-12">
          <div class="home-text">
            <h1>We build kitchens!</h1>
            <p>We also build not kitchens</p>
            <ul class="section-btn">
              <a href="#about" class="smoothScroll">
                <span data-hover="Discover More">Discover More</span>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Video --> */}
    <video controls="" autoplay="" loop="" muted>
      <source src="videos/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>
);

export default Home;
