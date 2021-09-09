import React, { Component } from 'react';

class UserItem extends Component {
    editClick = () => {
        this.props.changeEditUserStatus();
        this.props.editFunClick();
    }

    showPermisionName = (permissionId) => {
        switch (permissionId) {
            case 1: 
                return "Admin";
            case 2: 
                return "Sale";
            default: 
                return "SEO";
        }
    }

    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.userId}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phoneNumber}</td>
                <td>{this.showPermisionName(this.props.permissionId)}</td>
                <td>
                    <div className="btn-group">
                        <button type="button" className="btn btn-warning" onClick={() => this.editClick()}>Edit</button>
                        <button type="button" className="btn btn-danger"  onClick={(userId) => this.props.deleteUser(this.props.userId)}>Delete</button>
                    </div>                   
                </td>
            </tr>
        );
    }
}

export default UserItem;