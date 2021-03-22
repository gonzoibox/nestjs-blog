import { Admin } from "src/modules/admin/model/admin";
import { AdminRepository } from "src/modules/admin/service/admin.repository";

export class AuthService {
    constructor(
        private adminRepository: AdminRepository
    ) {}

    async validateAdmin(login: string, pass: string): Promise<Admin> {
        const admin: Admin = await this.adminRepository.findByLogin(login);

        if(admin && admin.password === pass) {
            const {password, ...secureAdmin} = admin;
            return secureAdmin;
        }
        return null;
    }
}