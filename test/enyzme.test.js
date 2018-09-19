import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/index.jsx';
import Photos from '../client/src/components/photos.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const wrapper = shallow(<App />);
  it('should render without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it('should not contain an Photos component', () => {
    expect(wrapper.find(Photos).exists()).toEqual(false);
  });
});


describe('<App />', () => {
  const wrapper = shallow(<Photos />);
  it('should render without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  
});