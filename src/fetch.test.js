import React, { Component } from 'react';
import PropTypes from "prop-types"
import './App.css';
import { TIMEOUT } from 'dns';
import App from './App.js'
import {mount, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('',() =>{
    beforeEach(function(){
        global.fetch = jest.fn().mockImplementation(()=>Promise.resolve({
            ok: true,
            json:()=>{
                return { items:[{description:'react appNamereact demo displayjson change desc'}]}
            }
        }))
    })

    it('should mock', () => {

        const app = mount(<App/>)
        return new Promise(resolve => setTimeout(resolve,0)).then(
            ()=>{expect(app.text()).toEqual('react appNamereact demo displayjson change desc')}
        )
    })
})
