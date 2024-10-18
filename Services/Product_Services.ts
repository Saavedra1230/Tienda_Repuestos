import Product from '../Dto/Product_Dto';
import productRepository from '../Repositories/Product_Repository';

class productService {

    static async register(product: Product) {
        return await productRepository.add(product);
    }

    static async all() {
        return await productRepository.all();
    }

    static async update(product: Product) {
        return await productRepository.update(product);
    }

    static async delete(id_p: Number) {
        return await productRepository.delete(id_p);
    }
}

export default productService;