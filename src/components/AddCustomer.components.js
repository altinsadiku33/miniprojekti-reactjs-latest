function AddCustomerComponents(props){

    const cancel = () => {
      props.history.push('/customers');
    }

    return(
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Add Customer</h3>
                    <div className="card-body">
                        <form className="row">

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>First Name: </label>
                                    <input placeholder="First Name" name="firstName" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name: </label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Birthdate: </label>
                                    <input placeholder="Birth Date" name="birthDate" className="form-control" type="Date"/>
                                </div>
                                <div className="form-group">
                                    <label>Job Title: </label>
                                    <input placeholder="Job Title" name="jobTitle" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Category: </label>
                                    <select name="category" className="form-control">
                                        <option selected hidden></option>
                                        <option>EXISTING_CUSTOMER</option>
                                        <option>NEW_CUSTOMER</option>
                                        <option>INACTIVE_CUSTOMER</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Email Address: </label>
                                    <input placeholder="Email Address" name="emailAddress" className="form-control"/>
                                </div>
                                <button className="btn btn-success w-100 mt-2" type='submit'>Add</button>
                            </div>
                            <div className="col-md-6">

                                <div className="form-group">
                                    <label>Street: </label>
                                    <input placeholder="Street Number" name="street" className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label>House # : </label>
                                    <input placeholder="House Number" name="house" className="form-control" type="number"/>
                                </div>

                                <div className="form-group">
                                    <label>State: </label>
                                    <input placeholder="State" name="state" className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label>Country: </label>
                                    <input placeholder="Country" name="country" className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label>City: </label>
                                    <input placeholder="City" name="city" className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label>Zip Code: </label>
                                    <input placeholder="Zip Code" name="zipCode" className="form-control"/>
                                </div>
                                <button className="btn btn-danger w-100 mt-2" onClick={cancel.bind(this)} style={{marginleft: "10px"}}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddCustomerComponents;