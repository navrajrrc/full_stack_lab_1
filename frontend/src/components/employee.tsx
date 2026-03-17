interface Employee {
    firstName: string;
    lastName?: string;
}

interface Department {
    name: string;
    employees: Employee[];
}

function EmployeeDirectory({ departments }: { departments: Department[] }) {
    return (
        <main>
            {departments.map(dept => (
            <section key={dept.name}>
                <h2>{dept.name}</h2>
                <ul>
                {dept.employees.map((emp, i) => (
                <li key={i}>
                {emp.firstName} {emp.lastName}
                </li>
                ))}
                </ul>
            </section>
        ))}
        </main>
    );
}

export default EmployeeDirectory;