import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App hello="aa"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});



it('renders App correctly',()=>{
const tree = renderer.create(<App hello ="hello world" />).toJSON();
    expect(tree).toMatchSnapshot();
});