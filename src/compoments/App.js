import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import DataUser from './Data.json';

import React, { Component } from 'react';

import { v1 as uuidv1 } from 'uuid';

const keyLocalStorage = "listUsers";

class App extends Component {

  constructor(props) {
    super(props);

    var data = this.getDataFromLocalStorage();

    if (data === null || data === undefined) {
      data = DataUser;     
    }

    this.state = {
      isShowForm: false,
      listUsers: data,
      textSearch: "",
      editUserStatus: false,
      userEditObj: {}
    }

    this.setDataToLocalStorage(data);
  }

  getDataFromLocalStorage = () => {
    var listUserStr = localStorage.getItem(keyLocalStorage);

    if (listUserStr != null && listUserStr != undefined) {
      return JSON.parse(localStorage.getItem(keyLocalStorage))
    }
    else {
      return null;
    }
  }

  setDataToLocalStorage = (data) => {
    console.log(data);
    localStorage.setItem(keyLocalStorage, JSON.stringify(data));
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  showForm = () => {
    this.setState({
      isShowForm: !this.state.isShowForm
    });
  }

  search = (textSearch, checkOk) => {
    this.setState({
      textSearch: textSearch
    });
  }

  addUser = (user) => {
    user.id = uuidv1();

    var items = this.state.listUsers;
    items.push(user);

    this.setState({
      listUsers: items
    });

    this.setDataToLocalStorage(items);

    this.showForm();
  }

  editUser = (user) => {
    this.setState({
      userEditObj: user
    });
  }

  editUserSubmit = (user) => {
    this.state.listUsers.forEach((item) => {
      if (item.id === user.id) {
        item.name = user.name;
        item.phoneNumber = user.phoneNumber;
        item.permissionId = user.permissionId;
      }
    })

    this.setDataToLocalStorage(this.state.listUsers);
  }

  deleteUser = (userId) => {
    var tempData = this.state.listUsers.filter(x => x.id != userId)

    this.setState({
      listUsers: tempData
    });

    this.setDataToLocalStorage(tempData);
  }

  render() {
    var listUserValid = [];
    this.state.listUsers.forEach((item) => {
      if (item.name.toLowerCase().includes(this.state.textSearch.toLowerCase())) {
        listUserValid.push(item);
      }
    })

    return (
      <div className="page-container">
        <div className="page-content">
          <Header />
          <div className="row">
            <div className="col-md-9">
              <div className="panel panel-default">
                <Search
                  showForm={() => this.showForm()}
                  isShowForm={this.state.isShowForm}
                  textSearch={this.state.textSearch}
                  search={(textSearch) => this.search(textSearch)}
                  editUserStatus={this.state.editUserStatus}
                  changeEditUserStatusFun={() => this.changeEditUserStatus()}
                  userEditObj={this.state.userEditObj}
                  editUserSubmit={(user) => this.editUserSubmit(user)} />

                <TableData
                  listUsers={listUserValid}
                  editFun={(user) => this.editUser(user)}
                  changeEditUserStatusFun={() => this.changeEditUserStatus()}
                  deleteUser={(userId) => { this.deleteUser(userId) }} />
              </div>
            </div>
            <AddUser showForm={() => this.showForm()} isShowForm={this.state.isShowForm} addUser={(user) => this.addUser(user)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
