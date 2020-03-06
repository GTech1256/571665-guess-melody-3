import React, {PureComponent} from "react";
import AudioPlayer from "../../components/audio-player/audio-player.jsx";

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0,
      };
    }

    handlePlayButtonClick(id) {

      this.setState((state) => ({
        activePlayerId: state.activePlayerId === id ? -1 : id
      }));
    }

    render() {
      return <Component
        {...this.props}
        renderPlayer={(src, id) => {
          const {activePlayerId} = this.state;

          return (
            <AudioPlayer
              src={src}
              isPlaying={id === activePlayerId}
              onPlayButtonClick={this.handlePlayButtonClick.bind(this, id)}
            />
          );
        }}
      />;
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};

export default withActivePlayer;
