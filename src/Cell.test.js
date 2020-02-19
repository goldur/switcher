import React from 'react';
import { shallow } from 'enzyme';
import Cell from './Cell';

describe('Cell', () => {
  it('should render initial Cell', () => {
    const component = shallow(<Cell isOn='0' gamestate='initial' />);

    expect(component).toMatchSnapshot();
    expect(component.find('td').hasClass('cell')).toBeTruthy();
  });

  it('should render empty Cell', () => {
    const component = shallow(<Cell isOn='0' gamestate='running' />);

    expect(component).toMatchSnapshot();
    expect(component.find('td').hasClass('cell')).toBeTruthy();
  });

  it('should render purple Cell', () => {
    const component = shallow(<Cell isOn='1' gamestate='running' />);

    expect(component).toMatchSnapshot();
    expect(component.find('td').hasClass('cell cell-on')).toBeTruthy();
  });

  it('should render blue Cell', () => {
    const component = shallow(<Cell isOn='1' gamestate='finished' />);

    expect(component).toMatchSnapshot();
    expect(component.find('td').hasClass('cell cell-finished')).toBeTruthy();
  });
});
