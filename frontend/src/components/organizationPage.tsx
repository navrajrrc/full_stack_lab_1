import { useState } from 'react';
import { organizationService } from '../organizationService';
import AddRoleForm from '../AddRoleForm';

function OrganizationPage() {
  const service = organizationService();
  const [roles, setRoles] = useState(service.getRoles());

  function refreshRoles() {
    setRoles(service.getRoles());
  }

  return (
    <main>
      <h2>Leadership & Management</h2>
      <table>
        <tbody>
          {roles.map((person, i) => (
            <tr key={i}>
              <td>{person.firstName} {person.lastName}</td>
              <td>{person.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddRoleForm onRoleAdded={refreshRoles} />
    </main>
  );
}

export default OrganizationPage;