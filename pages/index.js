import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

// Components
import Preloader from 'components/Preloader';
import Menu from 'components/Menu';
import Home from 'components/Home';
import About from 'components/About';
import Projects from 'components/Projects';
import Team from 'components/Team';
import Contact from 'components/Contact';
import Footer from 'components/Footer';

class Index extends React.Component {
  state = { loading: true };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2500);
  }

  render() {
    const { loading } = this.state;
    return (
      <PageWrapper>
        <Head>
          <link
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
        </Head>
        <Preloader loading={loading} />
        {/* <Menu /> */}
        {/* <Home /> */}
        {/* <About /> */}
        {/* <Projects /> */}
        {/* <Team /> */}
        {/* <Contact /> */}
        <Footer />
      </PageWrapper>
    );
  }
}

export default Index;

const PageWrapper = styled.div``;
