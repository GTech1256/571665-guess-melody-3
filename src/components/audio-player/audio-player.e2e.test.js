import React from "react";
import {mount} from "enzyme";
import AudioPlayer from "./audio-player";


const mock = {
  isPlaying: false,
  onPlayButtonClick: () => {},
  src: ``,
};

it(`<AudioPlayer /> should change state on function call`, async () => {
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

  await audioPlayerWrapper.setState({ isLoading: false })

  expect(audioPlayerWrapper.state().isPlaying).toBeFalsy();

  const audioPlayerBtn = audioPlayerWrapper
    .find(`button.track__button`);
    
  const simulateClick = async () => {
    audioPlayerBtn.prop(`onClick`)();
    await audioPlayerWrapper.setProps({ isPlaying: !audioPlayerWrapper.prop('isPlaying')})
    await audioPlayerWrapper.update()
  }


  await simulateClick()

  expect(onPlayButtonClick.mock.calls.length).toBe(1);
  expect(audioPlayerWrapper.state().isPlaying).toBeTruthy();

  await simulateClick()

  expect(onPlayButtonClick.mock.calls.length).toBe(2);
  expect(audioPlayerWrapper.state().isPlaying).toBeFalsy();
});
