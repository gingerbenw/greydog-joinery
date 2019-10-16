import styled from 'styled-components';

const Footer = () => (
  <FooterWrapper>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-sm-6">
            <h2>Digital Studio</h2>
            <p>
              321 Donec et justo id risus, Malesuada pharetra,
              <br />
              Tristique vestibulum,
              <br />
              Lorem ipsum dolor
            </p>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="footer-info">
              <h2>Keep in touch</h2>
              <p>
                <a href="tel:010-090-0780">010-090-0780</a>
              </p>
              <p>
                <a href="mailto:info@company.com">info@company.com</a>
              </p>
              <p>
                <a href="#">Our Location</a>
              </p>
            </div>
          </div>

          <div class="col-md-3 col-sm-12">
            <h2>About Us</h2>
            <p>
              Sed vestibulum posuere ante, eget blandit metus. Morbi sodales
              feugiat erat, et placerat sapien suscipit ut.
            </p>
            <ul class="social-icon">
              <li>
                <a href="#" class="fa fa-twitter" />
              </li>
              <li>
                <a href="#" class="fa fa-facebook" />
              </li>
              <li>
                <a href="#" class="fa fa-instagram" />
              </li>
              <li>
                <a href="#" class="fa fa-linkedin" />
              </li>
            </ul>
          </div>

          <div class="clearfix" />

          <div class="col-md-12 col-sm-12">
            <div class="copyright-text">
              <p>Copyright © 2018 Grey Dog Joinery</p>
            </div>
          </div>

          <div class="col-12 text-center">
            <img src="images/flo-footer.png" height="40px" />
          </div>
        </div>
      </div>
    </footer>
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.div`
  footer {
    padding-top: 120px;
    padding-bottom: 120px;
  }

  footer h4 {
    padding-top: 12px;
  }

  footer a {
    color: #757575;
  }

  footer .copyright-text {
    padding-top: 42px;
  }
`;
