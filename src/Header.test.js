import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('should render initial Header', () => {
    const component = shallow(<Header gamestate='initial' />);

    expect(component).toMatchSnapshot();
    expect(component.find('h2').text()).toEqual('SWITCHES');
    expect(component.find('span').hasClass('pseudoLink')).toBeTruthy();
    expect(component.find('span').text()).toEqual('CHEAT')
  });

  it('should render running Header', () => {
    const component = shallow(<Header gamestate='running' />);

    expect(component).toMatchSnapshot();
    expect(component.find('h2').text()).toEqual('TAP A SWITCH');
    expect(component.find('span').hasClass('pseudoLink')).toBeTruthy();
    expect(component.find('span').text()).toEqual('ABORT')
  });

  it('should render finished Header', () => {
    const component = shallow(<Header gamestate='finished' />);

    expect(component).toMatchSnapshot();
    expect(component.find('h2').text()).toEqual('VICTORY');
    expect(component.find('span').hasClass('pseudoLink')).toBeTruthy();
    expect(component.find('span').text()).toEqual('RESTART')
  });
});
