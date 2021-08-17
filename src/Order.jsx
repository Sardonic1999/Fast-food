import React, { Component } from 'react'
import './style.css'

export default class Order extends Component {
    render() {
        return (
            <div className='order'>
                <h1 className="title">Orders</h1>
                {
                    this.props.selected.map(value=>{
                        return(
                            <h1>{value.title} {value.price} so'm {value.selectedID} 
                            <div className='delete-div'>
                                <button className='delete' onClick={()=>this.props.onDelete(value.selectedID)}>
                            Delete
                            </button></div> 
                            </h1>
                        );
                    })}

                    <h1 className='title-total'>Total:{this.props.total} so'm</h1>
                    <button className='refresh' onClick={() => window.location.reload(false)}>Boshqatdan</button>
                    
            </div>
        )
    }
}
