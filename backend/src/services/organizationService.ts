import { organizationRepo } from '../repositories/organizationRepo';
import { Role } from '../data/organizationData';

export function organizationService() {
  function addRole(role: Role) {
    if (!role.firstName || role.firstName.trim().length < 3)
      return { success: false, error: "First name must be at least 3 characters." };
    if (!role.lastName || !role.role)
      return { success: false, error: "All fields are required." };
    if (!organizationRepo.createRole(role))
      return { success: false, error: "This role is already occupied." };
    return { success: true };
  }
  function getRoles() {
    return organizationRepo.getRoles();
  }
  return { addRole, getRoles };
}