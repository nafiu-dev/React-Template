import React, { Component } from 'react';

class Form extends Component {
    state = {
        name: null,
        email: null
    }

    HandleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    HandleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.HandleSubmit}>
                    <div className="form-group">
                        <label className="text-muted form-feild-label">Full name:  <span className="red-color">{this.state.name}</span></label>
                        <input type="text" id="name" className="form-control" onChange={this.HandleChange}/>
                    </div>
                    <div className="form-group">
                        <label className="text-muted form-feild-label">Email Address: <span className="red-color">{this.state.email} </span> </label>
                        <input type="email" id="email" className="form-control" onChange={this.HandleChange}/>
                    </div>
                    <div className="form-group">
                        <label className="text-muted form-feild-label">Write your message</label>
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                    <button className="btn btn-dark">send message</button>
                </form>
            </div>
        )
    }
}
export default  Form;