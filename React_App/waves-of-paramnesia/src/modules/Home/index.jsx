
import NavBar from 'library/common/components/NavBar';
import React, { PureComponent } from 'react';
import AboutRegrets from './Sections/AboutRegrets';
import AboutWaves from './Sections/AboutWaves';
import Aside from './Sections/Aside';
import Main from './Sections/Main';

class Home extends PureComponent {
  render() {
    return (
      <div class="container">
        <NavBar />
        <Main />
        <Aside />
        <AboutWaves />
        <AboutRegrets />
      </div>
    );
  } 
}

export default Home;
