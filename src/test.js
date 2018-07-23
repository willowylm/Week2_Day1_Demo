import React  from 'react'
import Enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.js'

Enzyme.configure({ adapter: new Adapter() });

    it('checkbox change the text after click', () => {
        const app = shallow(<App hello="hello react"/>);
        const oldP = app.find('p.App-intro');
        expect(oldP.text()).toEqual('react demo')
        app.find('button.btn1').simulate('click')
        expect(app.find('p.App-intro').text()).toEqual('react demo')
      });