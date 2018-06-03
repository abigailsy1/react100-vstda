import React, { Component } from 'react';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newText: "",
            newPriority: "",
            isEditing: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.removing = this.removing.bind(this);
        this.editingChange = this.editingChange.bind(this);
        this.saving = this.saving.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    removing() {
        this.props.deleteUpdateTodo(this.props.index);
    }
    editingChange() {
        this.setState({ isEditing: true });
    }
    saving() {
        this.props.editUpdateTodo({ text: this.refs.newText.value, priority: this.state.newPriority }, this.props.index);
        this.setState({ isEditing: false });
    }

    renderNormal() {
        return (
            <div>
                <input type="checkbox"></input>
                <span>{this.props.details.text}</span>

                <button type="button" className="delete-todo btn btn-link pull-right" onClick={this.removing}>
                    <span className="glyphicon glyphicon-trash pull-right " />
                </button>


                <button type="button" className="edit-todo btn btn-link pull-right" onClick={this.editingChange}>
                    <span className="glyphicon glyphicon-edit pull-right"  />
                </button>
            </div>
        );
    }
    renderEditing() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                   
                        <h6><strong>Description</strong></h6>
                        <textarea className="update-todo-text form-control" rows="4" name="text" ref="newText" defaultValue={this.props.details.text} onChange={this.handleChange}></textarea>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <h6><strong>Priority</strong></h6>
                        <select className="update-todo-priority form-control" name="newPriority" value={this.state.newPriority} onChange={this.handleChange}>
                            <option value="0">Select a priority</option>
                            <option value="1">Low Priorirty</option>
                            <option value="2">Medium Priority</option>
                            <option value="3">High Priority</option>
                        </select>
                    </div>
                </div>
                
                <button type="button" className="update-todo btn btn-success pull-right" name="save" onClick={this.saving}>SAVE</button>

            </div>
        );
    }
    render() {
        var priority = null;
        if (this.props.details.priority == 1) {
            priority = "list-group-item list-group-item-success";
        } else if (this.props.details.priority == 2) {
            priority = "list-group-item list-group-item-warning";
        } else if (this.props.details.priority === 3) {
            priority = "list-group-item list-group-item-warning";
        } else {
            priority = "list-group-item list-group-item-dark";
        } 
        return (
            <li className={priority}>
                {this.state.isEditing ? this.renderEditing() : this.renderNormal()}
            </li>
        );
    }
}





