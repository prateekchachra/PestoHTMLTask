
import NavBar from 'library/common/components/NavBar';
import React, { PureComponent } from 'react';
import AboutDarzini from './Sections/AboutDarzini';
import AboutRegrets from './Sections/AboutRegrets';
import AboutWaves from './Sections/AboutWaves';
import AboutWavesSongs from './Sections/AboutWavesSongs';
import Achievements from './Sections/Achievements';
import Aside from './Sections/Aside';
import Footer from './Sections/Footer';
import Main from './Sections/Main';
import PreviousAlbums from './Sections/PreviousAlbums';

class Home extends PureComponent {
  render() {
    return (
      <div class="container">
        <NavBar />
        <Main />
        <Aside />
        <AboutWaves />
        <AboutWavesSongs />
        <PreviousAlbums />
        <AboutRegrets />
        <Achievements />
        <AboutDarzini />
        <Footer />
      </div>
    );
  } 
}

export default Home;
