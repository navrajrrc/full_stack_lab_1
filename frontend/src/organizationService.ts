import { organizationRepo } from './organizationRepo';
import type { Role } from './organizationData.ts';

export function organizationService() {
  async function addRole(role: Role) {
    if (!role.firstName || role.firstName.trim().length < 3) {
      return { success: false, error: "First name must be at least 3 characters." };
    }
    if (!role.lastName || !role.role) {
      return { success: false, error: "All fields are required." };
    }
    const result = await organizationRepo.createRole(role);
    if (!result.success) {
      return { success: false, error: result.error || "This role is already occupied." };
    }
    return { success: true };
  }

  async function getRoles() {
    return await organizationRepo.getRoles();
  }

  return { addRole, getRoles };
}