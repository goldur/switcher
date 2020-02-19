import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
    it('should render initial Footer', () => {
      const component = shallow(<Footer gamestate='initial' />);
  
      expect(component).toMatchSnapshot();
      expect(component.find('button').hasClass('newButton')).toBeTruthy();
    });

    it('should render running Footer 0 Turns', () => {
        const component = shallow(<Footer turns='0' gamestate='running' />);
    
        expect(component).toMatchSnapshot();
        expect(component.find('h2').text()).toEqual('0 BUTTONS PRESSED');
      });

      it('should render running Footer 20 Turns', () => {
        const component = shallow(<Footer turns='20' gamestate='running' />);
    
        expect(component).toMatchSnapshot();
        expect(component.find('h2').text()).toEqual('20 BUTTONS PRESSED');
      });

      it('should render finished Footer 30 Turns', () => {
        const component = shallow(<Footer turns='30' gamestate='running' />);
    
        expect(component).toMatchSnapshot();
        expect(component.find('h2').text()).toEqual('30 BUTTONS PRESSED');
      });
});