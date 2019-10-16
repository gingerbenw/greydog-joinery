const Menu = () => (
  <div class="navbar custom-navbar navbar-fixed-top" role="navigation">
    <div class="container">
      {/* <!-- NAVBAR HEADER --> */}
      <div class="navbar-header">
        <button
          class="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span class="icon icon-bar" />
          <span class="icon icon-bar" />
          <span class="icon icon-bar" />
        </button>
        {/* <!-- lOGO --> */}
        <a href="index.html" class="navbar-brand">
          <img src="images/logo-white.png" height="30px" />
        </a>
      </div>

      {/* <!-- MENU LINKS --> */}
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#home" class="smoothScroll">
              Home
            </a>
          </li>
          <li>
            <a href="#about" class="smoothScroll">
              Kitchens
            </a>
          </li>
          <li>
            <a href="#team" class="smoothScroll">
              Team
            </a>
          </li>
          <li>
            <a href="#contact" class="smoothScroll">
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Menu;
