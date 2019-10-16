import styled from 'styled-components';

const Team = () => (
  <TeamWrapper>
    {/* <!-- TEAM --> */}
    <section id="team" class="parallax-section">
      <div class="container">
        <div class="row">
          <div class="col-md-offset-2 col-md-8 col-sm-12">
            {/* <!-- SECTION TITLE --> */}
            <div class="section-title">
              <h1>Meet Our People</h1>
            </div>
          </div>

          <div class="clearfix" />

          <div id="owl-team" class="owl-carousel">
            <div class="col-md-4 col-sm-4 item">
              <div class="team-item">
                <img
                  src="images/team-vicky.jpg"
                  class="img-responsive"
                  alt=""
                />
                <div class="team-overlay">
                  <ul class="social-icon">
                    <li>
                      <a href="#" class="fa fa-twitter" />
                    </li>
                    <li>
                      <a href="#" class="fa fa-linkedin" />
                    </li>
                  </ul>
                </div>
              </div>
              <p>Vicky</p>
              <h3>Designer</h3>
            </div>

            <div class="col-md-4 col-sm-4 item">
              <div class="team-item">
                <img src="images/team-flo.jpg" class="img-responsive" alt="" />
                <div class="team-overlay">
                  <ul class="social-icon">
                    <li>
                      <a href="#" class="fa fa-instagram" />
                    </li>
                    <li>
                      <a href="#" class="fa fa-github" />
                    </li>
                    <li>
                      <a href="#" class="fa fa-facebook" />
                    </li>
                  </ul>
                </div>
              </div>
              <p>Flo</p>
              <h3>CEO</h3>
            </div>

            <div class="col-md-4 col-sm-4 item">
              <div class="team-item">
                <img src="images/team-owen.jpg" class="img-responsive" alt="" />
                <div class="team-overlay">
                  <ul class="social-icon">
                    <li>
                      <a href="#" class="fa fa-instagram" />
                    </li>
                    <li>
                      <a href="#" class="fa fa-dribbble" />
                    </li>
                    <li>
                      <a href="#" class="fa fa-behance" />
                    </li>
                  </ul>
                </div>
              </div>
              <p>Owen</p>
              <h3>Carpenter</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </TeamWrapper>
);

export default Team;

const TeamWrapper = styled.div`
  #team .item {
    display: block;
    width: 100%;
    margin-bottom: 22px;
  }

  #team h3,
  #team p {
    margin: 0;
  }

  .team-item {
    overflow: hidden;
    position: relative;
    margin-top: 34px;
    margin-bottom: 16px;
  }

  .team-item img {
    -webkit-transition: all ease-in-out 0.4s;
    transition: all ease-in-out 0.4s;
  }
  .team-item:hover img {
    transform: scale(1.1);
  }

  .team-overlay {
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: all ease-in-out 0.4s;
    transition: all ease-in-out 0.4s;
  }

  .team-overlay .social-icon {
    position: relative;
    top: 45%;
  }
  .team-overlay .social-icon li a {
    background: #ffffff;
    color: #191919;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
  }

  .team-item:hover .team-overlay {
    opacity: 1;
  }
`;
