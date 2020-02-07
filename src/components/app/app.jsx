import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errorsCount} = props;
  return (
    <WelcomeScreen errorsCount={errorsCount} />
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
