import React, { Component } from 'react'
import './style.css'
import {data} from './mock'
import Order from './Order'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      total: 0,
      
    };
  }
  render() {
    const onSelect = (value) =>{
      const selected = [
        ...this.state.selected, 
        { selectedID: this.state.selected.length +1 , ...value} ]
      selected.forEach(value=> 
        this.setState({total: this.state.total + value.price})
        );
      this.setState({selected: selected});

    };

 
    const onDelete=(selectedID)=>{
      console.log(selectedID);
      
      const filtered = this.state.selected.filter(value=> {
        value.selectedID === selectedID && 
        this.setState({total: this.state.total -value.price});
        return value.selectedID !==selectedID; 
      })
        
      this.setState({selected: filtered});
      
      const newData = this.state.selected.filter(value => value.selectedID !==selectedID)
      this.setState({selected: newData})  
   
    }
    
    
    return (
      <div className='container'>
        <div className='menu'>
          {
            data.map(value=>{
              return(
                <div>
                  <h1 className='title'>{value.title}</h1>
                <div className='submenu-items'>
                  {
                    value.lists.map((item)=>{
                      return(
                  <div onClick={()=>onSelect(item)} key={item.id} className='submenu'>
                  <img src={item.src} alt='error01' className='pizza' />
                  <h3 className='name'>{item.title}</h3>
                  <h2 className='price' >{item.price} so'm</h2>
                  </div>
                      )
                    })
                  }
                </div>
                </div>
              );
            })}
        </div>
       <Order onDelete={(selectedID)=>onDelete(selectedID)} 
       total={this.state.total} 
       selected={this.state.selected}
        />
        
      </div>
    )
  }
}
