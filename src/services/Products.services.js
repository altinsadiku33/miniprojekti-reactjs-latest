import http from ".../http-common"

class ProductDataService {
    getProducts(){
        return http.get("/products");
    }
}

export default new ProductDataService();