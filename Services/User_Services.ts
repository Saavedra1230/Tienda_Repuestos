import User from '../Dto/User_Dto';
import GenerateHash from '../Helpers/Generate_Hash';
import UserRepository from '../Repositories/User_Repository';
import Auth from '../Dto/Auth_Dto';



class UserService{
    static async register(user: User){
        user.password = await GenerateHash(user.password);
        return await UserRepository.add(user);
    }

    static async login(auth: Auth){
        return await UserRepository.login(auth);
    }
}

export default UserService;