import Purchase from "../Dto/Purchase_Dto";
import PurchaseRepository from "../Repositories/Purchase_Repository";

class PurchaseService{
    static async register(Purchase: Purchase){
        return await PurchaseRepository.register(Purchase);
    }

    static async update(id: number){
        return await PurchaseRepository.update(id);
    }

    static async delete(id: number){
        return await PurchaseRepository.delete(id);
    }

    static async get(){
        return await PurchaseRepository.get();
    }
}

export default PurchaseService;