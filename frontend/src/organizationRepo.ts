import type { Role } from './organizationData.ts';

export const organizationRepo = {
  async getRoles(): Promise<Role[]> {
    const res = await fetch('http://localhost:3000/api/roles');
    return res.json();
  },
  async createRole(role: Role) {
    const res = await fetch('http://localhost:3000/api/roles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(role)
    });
    return res.json();
  }
};