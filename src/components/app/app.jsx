import React, {PureComponent} from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {errorsCount} = this.props;

    return <WelcomeScreen
      errorsCount={errorsCount}
      onWelcomeButtonClick={() => {}}
    />;
  }
}

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
