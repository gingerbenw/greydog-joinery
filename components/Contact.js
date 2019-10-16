import Button from 'components/Elements/Button';
import H1 from 'components/Elements/H1';

const Contact = () => (
  // <!-- CONTACT -->
  <section id="contact" class="parallax-section">
    <div class="container">
      <div class="row">
        <div class="col-md-offset-3 col-md-6 col-sm-12">
          <div class="section-title">
            <H1>Talk to us!</H1>
          </div>
        </div>

        <div class="clearfix" />

        <div class="col-md-offset-2 col-md-8 col-sm-12">
          {/* <!-- CONTACT FORM HERE --> */}
          <form id="contact-form" action="#" method="get" role="form">
            {/* <!-- IF MAIL SENT SUCCESSFULLY --> */}
            <h6 class="text-success">
              Your message has been sent successfully.
            </h6>

            {/* <!-- IF MAIL SENDING UNSUCCESSFULL --> */}
            <h6 class="text-danger">
              E-mail must be valid and message must be longer than 1 character.
            </h6>

            <div class="col-md-6 col-sm-6">
              <input
                type="text"
                class="form-control"
                id="cf-name"
                name="cf-name"
                placeholder="Name"
              />
            </div>

            <div class="col-md-6 col-sm-6">
              <input
                type="email"
                class="form-control"
                id="cf-email"
                name="cf-email"
                placeholder="Email Address"
              />
            </div>

            <div class="col-md-12 col-sm-12">
              <input
                type="text"
                class="form-control"
                id="cf-subject"
                name="subject"
                placeholder="Subject"
              />
              <textarea
                class="form-control"
                rows="5"
                id="cf-message"
                name="cf-message"
                placeholder="Message"
              />
            </div>

            <div class="col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
              <div class="section-btn">
                <Button type="submit">Send Message</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
