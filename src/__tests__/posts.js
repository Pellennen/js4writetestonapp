import React from 'react'
import {mount} from 'enzyme'
import CreateNewPost from '../components/CreateNewPost'

test('title should be empty', () => {

  const wrapper = mount(<CreateNewPost />)
  expect(wrapper.state('title')).toBeFalsy()


})

test('content should be empty', () => {
    const wrapper = mount(<CreateNewPost />)
    expect(wrapper.state('content')).toBeFalsy()
})
