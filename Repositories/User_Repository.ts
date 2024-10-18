import db from '../Config/Config-db';
import Auth from '../Dto/Auth_Dto';
import User from '../Dto/User_Dto';
import bcrypt from 'bcryptjs';

class UserRepository {
    static async add(user: User) {
        try {
            const sql = 'INSERT INTO Users (name, email, password, age, phoneNumber, address, CC, Role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            const values = [user.name, user.email, user.password, user.age, user.phoneNumber, user.address, user.CC, user.Role];
            const [result] = await db.execute(sql, values);
            return result;
        } catch (error) {
            console.error('Error al registrar usuario');
        }
    }
    static async login(auth: Auth) {
        const sql = 'SELECT CC, password FROM Users WHERE email=?';
        const values = [auth.email];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0) {
            const isPasswordValid = await bcrypt.compare(auth.password, result[0][0].password);
            if (isPasswordValid) {
                return { logged: true, status: "Autenticación correcta!", CC: result[0][0].CC }
            }
            return { logged: false, status: "Nombre de usuario o contraseña invalido!" };
        }
        return { logged: false, status: "Nombre de usuario o contraseña invalido!" }
    }
}

export default UserRepository;