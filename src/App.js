import React from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Nav from './components/Navigation/Nav'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import CurrentEvents from './components/CurrentEvents/CurrentEvents';
import CurrentEventsDetails from './components/CurrentEventsDetails';
import './App.css'

const App = () => {
  const [page, setPage] = React.useState(0)

  const details = CurrentEventsDetails.map(detail => {
    return <div className='detailsApp'>
      {
        <CurrentEvents
          title={detail.title}
          description={detail.description}
          date={detail.date}
          time={detail.time}
          place={detail.place}
          guest={detail.guest}
        />
      }
    </div>
  })

  if (page === 0) {
    return (
      <>
        <NavBar
          links={"Current Events"}
          handleState={setPage}
          page={page}
        />
        <Header />
        <Body />
        <Nav />
        <Footer />
      </>
    );
  }

  else {
    return (
      <div>
        <NavBar
          links={"Home"}
          handleState={setPage}
          page={page}
        />
        <br />
        {details}
      </div>
    )
  }
};

export default App;
