import React, { Component } from 'react';


class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.userEditObj.name,
            phoneNumber: props.userEditObj.phoneNumber,
            permissionId: props.userEditObj.permissionId,
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitForm = () => {
        var user = {};
        user.id = this.props.userEditObj.id;
        user.name = this.state.name;
        user.phoneNumber = this.state.phoneNumber;
        user.permissionId = this.state.permissionId;

        this.props.editUserSubmit(user);

        this.props.changeEditUserStatus();
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="form-group">
                    <label className="col-sm-4 control-label">Name: </label>
                    <div className="col-sm-8">
                        <input defaultValue={this.props.userEditObj.name} type="text" className="form-control" name="name" onChange={(event) => this.onChange(event)} />
                    </div>
                    <br />
                </div>

                <div className="form-group">
                    <label className="col-sm-4 control-label">Phone: </label>
                    <div className="col-sm-8">
                        <input defaultValue={this.props.userEditObj.phoneNumber} type="text" className="form-control" name="phoneNumber" onChange={(event) => this.onChange(event)} />
                    </div>
                    <br />
                </div>

                <div className="form-group">
                    <label className="col-sm-4 control-label">Permission: </label>
                    <div className="col-sm-8">
                        <select defaultValue={this.props.userEditObj.permissionId} className="form-control" name="permissionId" onChange={(event) => this.onChange(event)}>
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
                        <button type="button" className="btn btn-danger" onClick={() => this.props.changeEditUserStatus()}>Cancle</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUser;