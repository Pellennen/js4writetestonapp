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

test('test message get saved to state when submitted', () => {
    const wrapper = mount(<Bot/>)
    const wrapper2 = mount(<MessageForm/>)
    wrapper.find('#message').simulate('change', {
      target : {value:'HelloRobot', name: 'userMessage'}
    })

    wrapper.find('MessageForm').simulate('submit')
    expect(wrapper.state('messages')).toHaveLength(1)

})
