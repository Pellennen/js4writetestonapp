import React from 'react'
import {mount} from 'enzyme'
import CreateNewComment from '../components/CreateNewComment'


test('Add Comment', () => {
  const wrapper = mount(<CreateNewComment comment=''/>)
  wrapper.find('textarea').simulate('change', {
    target: { value: 'blabla', name: 'comment'}
  })
})

test('State should be empty', () => {
  const wrapper = mount(<CreateNewComment/>)
  expect(wrapper.state('comment')).toBeFalsy()
})
