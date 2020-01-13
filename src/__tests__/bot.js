import Bot from '../components/Bot/Bot'
import React from 'react'
import {shallow, mount} from 'enzyme'
import MessageForm from '../components/Bot/MessageForm'

test('Typing should be set to false', () => {
 const wrapper = mount(<Bot/>)
 expect(wrapper.state('typing')).toBeFalsy()
})

test('User message should contain string after change', () => {
  const wrapper = mount(<MessageForm/>)

  wrapper.find('#message').simulate('change', {
    target : {value:'HelloRobot', name: 'userMessage'}
  })
  expect(wrapper.state('userMessage')).toContain('HelloRobot')
})

test('test if onChange method works', () => {
    const wrapper = mount(<MessageForm/>)
    wrapper.instance().onChange({target : {value:'HelloRobot', name: 'userMessage'}})
    expect(wrapper.state('userMessage')).toContain('HelloRobot')
})

test('test', () => {
   const wrapper = mount(<Bot/>)
   wrapper.instance().sendReply()
   console.log(wrapper.state('messages'))
})
