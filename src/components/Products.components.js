import{Component}  from "react";
import ProductDataService from ".../services/Products.services";

class ProductsComponents extends Component{
    constructor(props) {
        super(props);

        this.state = {
            products : []
        }
    }
    componentDidMount() {
        ProductDataService.getProducts().then((res) => {
            this.setState({products: res.data});
        });
    }

    render() {
        return(
            <div>
                <h2 className="text-center">Products List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Identification</th>
                            <th>Label</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {

                                <tr>
                                    <td>12345</td>
                                    <td>Emri i produktit</td>
                                    <td>Pershkrimi i produktit</td>
                                    <td>123 EUR</td>

                                </tr>
                        }
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}
export default ProductsComponents;