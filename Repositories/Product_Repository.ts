import db from '../Config/Config-db';
import Product from '../Dto/Product_Dto';
import { ResultSetHeader } from 'Mysql2';

class productRepository {

    static async add(product: Product) {
        try {
            const sql = `INSERT INTO Products (name_p, description_p, value_p, feature_p, id_p, amount_p) VALUES (?, ?, ?, ?, ?, ?)`;
            const values = [product.name_p, product.description_p, product.value_p, product.feature_p, product.id_p,product.amount_p];
            const [result] = await db.execute(sql, values);
            return result;
        } catch (error) {
            console.error('Error al registrar el producto!', error);
        }
    }

    static async all() {
        try {
            const sql = `SELECT * FROM Products`;
            const [rows] = await db.execute(sql);
            return rows;
        } catch (error) {
            console.error('Error: No se encuentra el producto!');
        }
    }

    static async update(product: Product) {
        try {
            const sql = `UPDATE Products SET name_p = ?, description_p = ?, value_p = ?, feature_p = ?, amount_p = ? WHERE id_p = ?`;
            const values = [product.name_p, product.description_p, product.value_p, product.feature_p, product.amount_p];
            const [result] = await db.execute<ResultSetHeader>(sql, values);
            return result;
        } catch (error) {
            console.error('Error: no se pudo actualizar el producto!', error);
        }
    }

    static async delete(id_p: Number) {
        try {
            const sql = `DELETE FROM Products WHERE id_p = ?`;
            const [result] = await db.execute<ResultSetHeader>(sql, [id_p]);
            return result.affectedRows;
        } catch (error) {
            console.error('Error al eliminar producto', error);
        }
    }
}

export default productRepository;