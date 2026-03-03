import type { Role } from './organizationData';
import { organizationRoles } from './organizationData';

let roles: Role[] = JSON.parse(JSON.stringify(organizationRoles));

export const organizationRepo = {
    getRoles(): Role[] {
        return roles;
    },
    createRole(newRole: Role): boolean {
        if (roles.some(r => r.role === newRole.role)) return false;
        roles.push(newRole);
        return true;
    }
};