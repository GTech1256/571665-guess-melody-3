import React, {PureComponent} from "react";
import AudioPlayer from "../../components/audio-player/audio-player.jsx";

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0,
      };

      this.renderPlayer = this.renderPlayer.bind(this);
    }

    renderPlayer(src, id) {
      const {activePlayerId} = this.state;

      return (
        <AudioPlayer
          src={src}
          isPlaying={id === activePlayerId}
          onPlayButtonClick={this.handlePlayButtonClick.bind(this, activePlayerId, id)}
        />
      );
    }

    handlePlayButtonClick(activePlayerId, id) {
      this.setState({
        activePlayerId: activePlayerId === id ? -1 : id
      });
    }

    render() {
      return <Component
        {...this.props}
        renderPlayer={this.renderPlayer}
      />;
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};

export default withActivePlayer;
