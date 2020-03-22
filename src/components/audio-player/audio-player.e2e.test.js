import React from "react";
import {mount} from "enzyme";
import AudioPlayer from "./audio-player";


const mock = {
  isPlaying: false,
  onPlayButtonClick: () => {},
  src: ``,
};

it(`<AudioPlayer /> should change state on function call`, () => {
  const onPlayButtonClick = jest.fn(() => {});
  const props = Object.assign(
      {},
      mock,
      {
        onPlayButtonClick
      }
  );

  const audioPlayerWrapper = mount(<AudioPlayer
    {...props}
  />);

  const audioPlayerBtn = audioPlayerWrapper
      .find(`button.track__button`);

  const simulateClick = (cb) => {
    audioPlayerBtn.prop(`onClick`)();
    audioPlayerWrapper.setProps(
        {isPlaying: !audioPlayerWrapper.prop(`isPlaying`)},
        () => {
          audioPlayerWrapper.update();
          cb();
        }
    );
  };

  audioPlayerWrapper.setState({isLoading: false}, () => {
    expect(audioPlayerWrapper.state().isPlaying).toBeFalsy();

    simulateClick(() => {
      expect(onPlayButtonClick.mock.calls.length).toBe(1);
      expect(audioPlayerWrapper.state().isPlaying).toBeTruthy();
      simulateClick(() => {
        expect(onPlayButtonClick.mock.calls.length).toBe(2);
        expect(audioPlayerWrapper.state().isPlaying).toBeFalsy();
      });
    });
  });
});
