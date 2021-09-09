import React, { Component } from 'react';


class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            phoneNumber: "",
            permissionId: 0,
        }
    }


    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

        var user = {};
        user.id = this.state.id;
        user.name = this.state.name;
        user.phoneNumber = this.state.phoneNumber;
        user.permissionId = this.state.permissionId;
    }

    submitForm = () => {
        var user = {};
        user.id = this.state.id;
        user.name = this.state.name;
        user.phoneNumber = this.state.phoneNumber;
        user.permissionId = this.state.permissionId;

        this.props.addUser(user);
    }

    showForm = () => {
        if (this.props.isShowForm === true) {
            return (
                <div>
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Name: </label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" name="name" onChange={(event) => this.onChange(event)} />
                        </div>
                        <br />
                    </div>

                    <div className="form-group">
                        <label className="col-sm-4 control-label">Phone: </label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" name="phoneNumber" onChange={(event) => this.onChange(event)} />
                        </div>
                        <br />
                    </div>

                    <div className="form-group">
                        <label className="col-sm-4 control-label">Permission: </label>
                        <div className="col-sm-8">
                            <select className="form-control" name="permissionId" onChange={(event) => this.onChange(event)}>
                                <option value="">--- Select ---</option>
                                <option value="1">Admin</option>
                                <option value="2">Sale</option>
                                <option value="3">SEO</option>
                            </select>
                        </div>
                        <br />
                        <br />
                    </div>

                    <div className="form-group">
                        <div className="col-sm-6">
                            <button type="button" className="btn btn-success" onClick={() => this.submitForm()}>Save</button>
                        </div>
                        <div className="col-sm-6">
                            <button type="button" className="btn btn-danger" onClick={() => this.props.showForm()}>Cancle</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="col-md-3">
                {this.showForm()}
            </div>
        );
    }
}

export default AddUser;