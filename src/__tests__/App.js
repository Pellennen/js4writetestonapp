import React from 'react';
import { mount,render } from 'enzyme';
import App from '../components/App';

test('renders the app', () => {
  render(<App />);
});

test('fetches current persona', () => {
    const wrapper = mount(<App />)
    expect(wrapper.state('currentPersona')).toBe('Zac')
});

test('Page should change on click and change back', () => {
  const wrapper = mount(<App />)
  wrapper.find('Button').simulate('click');
  expect(wrapper.state('currentPage')).toContain('bot')
  wrapper.find('Button').simulate('click');
  expect(wrapper.state('currentPage')).toContain('home')
});
