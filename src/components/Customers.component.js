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
                this.originData = res.data;
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
        }).then((result) => {
            if (result.isConfirmed){
            CustomerDataService.deleteCustomer(id)
                .then((response) => {
                console.log(response.data);
                window.location.reload();
            })
            .catch((e) => {
                console.log(e);
            });
            }
        });
    }
    handleSearch(searchValue){
        if (searchValue !== ""){
            const filteredRows = [];
            this.originData.forEach((customer) => {
            const firstNameMatch =
                customer.firstName.toUpperCase().indexOf(searchValue.toUpperCase()) >
                -1;
            const lastNameMatch =
                    customer.lastName.toUpperCase().indexOf(searchValue.toUpperCase()) >
                    -1;
            if (firstNameMatch || lastNameMatch) {
                filteredRows.push(customer);
            }
            });
            this.setState({customers: filteredRows});
        } else {
            this.setState({ customers: this.originData });
        }
    }



    render() {
        return (
            <div>
                <h2 className="text-center">Customers List</h2>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-success" onClick={this.addCustomer}>Add Customer</button>
                    <input className="w-25" type="text" onChange={(e ) => this.handleSearch(e.target.value)}/>
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
                    {this.state.customers.map((customer)=>(
                        <tr key={customer.id}>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.jobTitle}</td>
                            <td>{customer.emailAddress}</td>
                            <td>{customer.category}</td>
                            <td>
                                <button
                                    onClick={() => this.deleteCustomer(customer.id)}
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
