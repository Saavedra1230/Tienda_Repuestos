import db from '../Config/Config-db';
import Purchase from '../Dto/Purchase_Dto';

class PurchaseRepository{
    static async get(){
        const sql = 'SELECT * FROM Purchases';
        return db.execute(sql);
    }

    static async register(Purchase: Purchase ){
        const sql = 'INSERT INTO Purchases (product, CC, value) VALUES (?, ?, ?)';
        const values = [Purchase.id_product, Purchase.CC, Purchase.value,];
        return db.execute(sql, values);
    }

    static async delete(id: number){
        const sql = 'DELETE FROM Purchases WHERE id = ?';
        const values = [id];
        return db.execute(sql, values);
    }

    static async update(id: number){
        const sql = 'UPDATE Purchases SET status = ? WHERE id = ?';
        const values = [id];
        return db.execute(sql, values);
    }
}

export default PurchaseRepository;