import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textSearch: ""
        }
    }


    showFormButton = () => {
        if (this.props.isShowForm === false) {
            return <button type="button" className="btn btn-primary" onClick={() => this.props.showForm()}>Add new</button>;
        }
    }

    searchChange = (event, checkOk) => {
        this.setState({
            textSearch: event.target.value
        });

        this.props.search(this.state.textSearch)
    }

    showEditForm = () => {
        if (this.props.editUserStatus) {
            return <EditUser
                changeEditUserStatus={() => this.props.changeEditUserStatusFun()}
                userEditObj={this.props.userEditObj}
                editUserSubmit={(user) => this.props.editUserSubmit(user)} />
        }
    }

    render() {
        return (
            <div>

                {this.showEditForm()}
                <div>
                    <div className="">
                        <div className="col-md-6">
                            <div className="input-group">
                                <input type="text" className="form-control" onChange={(event) => this.searchChange(event)} />
                                <span className="input-group-addon" onClick={(textSearch) => this.props.search(this.state.textSearch)}>
                                    <i className="icon-search3" />
                                </span>

                            </div>
                        </div>

                        <div className="col-md-3 col-md-offset-3 float-right">
                            <div className="input-group">
                                {this.showFormButton()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Search;