import React, { Component } from "react";
import Swal from "sweetalert2";

class CustomersComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customers: []
        }
    }

    componentDidMount() {
    }


    deleteCustomer(id) {
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
        })
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Customers List</h2>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-success" onClick={this.addCustomer}>
                        Add Customer
                    </button>
                    <input
                        className="w-25"
                        type="text"
                    />
                </div>

            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Job Title</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                            <tr>
                            <td>Filan</td>
                            <td>Fisteku</td>
                            <td>Software Engineer</td>
                            <td>filan.fisteku@gmail.com</td>
                            <td>NEW CUSTOMER</td>
                            <td>
                                <button

                                className="btn btn-danger"
                                >
                                Delete
                                </button>
                            </td>
                            </tr>

                    </tbody>
                </table>
        </div>
      </div>
    );
  }
}

export default CustomersComponent;
