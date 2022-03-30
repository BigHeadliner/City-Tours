import React, { Component } from 'react' 
import "./Tour.scss"

export default class Tour extends Component {
    render() {
        return (
            <article className='tour'>
              <div className='img-container'>  
               <img  
                 width='200' 
                 src="https://images.pexels.com/photos/11511204/pexels-photo-11511204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  
                 alt=""
                  /> 
                  <span className='close-btn'>  
                    <i className='fas fa-window-close' />
                 </span>
              </div> 
              <div className='tour-info'> 
               <h3>city</h3> 
               <h4>name</h4> 
               <h5>info<span><i className='fas fa-caret-square-down'/></span></h5> 
               <p>lorem ipsum dolor sit amet</p>
             </div>
            </article>
        )
    }
}