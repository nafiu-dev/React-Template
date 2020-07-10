import React, { Component } from 'react';

class Comments extends Component {
    state = {
        name: '',
        contact: ''
    }

    HandleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    HandleSubmit = e => {
        e.preventDefault();
        // console.log(this.state)
        this.props.Addcomment(this.state);
                
        this.setState({
            name: '',
            contact: ''
        })
    }

    render() {
        return (
            <div className="container">
            <h4>Add a comment</h4>
                <form onSubmit={this.HandleSubmit}>
                    <div className="form-group">
                        <label>Your Name</label>
                        <input type="text" id="name" className="form-control" onChange={this.HandleChange} value={this.state.name}/>
                        <small className="form-text text-muted">posted on public</small>
                    </div>
                    <div className="form-group">
                        <label>Your comment</label>
                        <textarea id="contact" className="form-control" rows="3" onChange={this.HandleChange} value={this.state.contact}></textarea>
                    </div>
                    <button className="btn btn-dark">Add comment</button>
                </form>
            </div>
        )
    }
}
export default Comments;