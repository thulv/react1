import React, { Component } from 'react';
import UserItem from './UserItem';

class TableData extends Component {

    showListUser = () => this.props.listUsers.map((value, key) => (
        <UserItem userId={value.id} name={value.name} phoneNumber={value.phoneNumber} permissionId={value.permissionId}
            key={key} stt={key + 1} editFunClick={(user) => this.props.editFun(value)}
            changeEditUserStatus={() => this.props.changeEditUserStatusFun()} 
            deleteUser = {(userId)=>{this.props.deleteUser(userId)}}/>
    ))

    render() {
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Permission</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showListUser()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;