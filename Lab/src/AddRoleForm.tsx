import { useFormInput } from '../src/useFormatInput';
import { organizationService } from '../src/organizationService';

function AddRoleForm({ onRoleAdded }: { onRoleAdded: () => void }) {
  const service = organizationService();

  const firstName = useFormInput('', value =>
    value.trim().length < 3 ? "First name must be at least 3 characters." : null
  );
  const lastName = useFormInput('', value =>
    !value ? "Last name is required." : null
  );
  const role = useFormInput('', value =>
    !value ? "Role is required." : null
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const isFirstNameValid = firstName.validateInput();
    const isLastNameValid = lastName.validateInput();
    const isRoleValid = role.validateInput();
    if (!isFirstNameValid || !isLastNameValid || !isRoleValid) return;

    const result = service.addRole({
      firstName: firstName.value,
      lastName: lastName.value,
      role: role.value
    });
    if (!result.success) {
      if (result.error?.includes("First name")) firstName.setError(result.error);
      else if (result.error?.includes("Last name")) lastName.setError(result.error);
      else if (result.error?.includes("Role")) role.setError(result.error);
      return;
    }
    firstName.setValue('');
    lastName.setValue('');
    role.setValue('');
    onRoleAdded();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Role</h3>
      <div>
        <label>
          First Name:
          <input value={firstName.value} onChange={firstName.onChange} />
        </label>
        {firstName.error && <div style={{ color: 'red' }}>{firstName.error}</div>}
      </div>
      <div>
        <label>
          Last Name:
          <input value={lastName.value} onChange={lastName.onChange} />
        </label>
        {lastName.error && <div style={{ color: 'red' }}>{lastName.error}</div>}
      </div>
      <div>
        <label>
          Role:
          <input value={role.value} onChange={role.onChange} />
        </label>
        {role.error && <div style={{ color: 'red' }}>{role.error}</div>}
      </div>
      <button type="submit">Add Role</button>
    </form>
  );
}

export default AddRoleForm;