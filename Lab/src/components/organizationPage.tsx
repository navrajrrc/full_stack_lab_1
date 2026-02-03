import { organizationRoles } from '../organizationData';

function OrganizationPage() {
  return (
    <main>
      <h2>Leadership & Management</h2>
      <table>
        <tbody>
          {organizationRoles.map((person, i) => (
            <tr key={i}>
              <td>{person.name}</td>
              <td>{person.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default OrganizationPage;