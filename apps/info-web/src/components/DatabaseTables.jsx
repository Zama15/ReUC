// src/components/DatabaseTables.jsx
const DatabaseTables = ({ tables }) => {
  return (
    <div className="db-tables">
      {tables.map((table, index) => (
        <div key={index} className="table-card">
          <h3>{table.name}</h3>
          <ul className="table-fields">
            {table.fields.map((field, fieldIndex) => (
              <li key={fieldIndex}>{field}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DatabaseTables;
