import React, { Component } from "react";
import Swal from "sweetalert2";
import CustomerDataService from "../services/Customers.services";

class CustomersComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customers: []
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    componentDidMount() {

            CustomerDataService.getCustomers().then((res) => {
                this.setState({customers: res.data});
            });

    }

    addCustomer(){
        this.props.history.push('/add-customer');
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




            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Job Title</th>
                        <th>Email</th>
                        <th>Category</th>
                        <th>ACtions</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.state.customers.map((customer)=>(
                        <tr key={customer.id}>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.jobTitle}</td>
                            <td>{customer.emailAddress}</td>
                            <td>{customer.category}</td>
                            <td>
                                <button
                                className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
  }
}

export default CustomersComponent;
