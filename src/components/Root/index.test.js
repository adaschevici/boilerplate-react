import React from 'react';
import RootComponent from './index';

it('renders without crashing', () => {
  const wrapper = shallow(
    <RootComponent />
  );
  expect(wrapper).toMatchSnapshot();
});


