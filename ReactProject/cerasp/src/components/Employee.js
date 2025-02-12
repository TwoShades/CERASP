import "./Employee.css";

const Employee = ({ member }) => {
  return (
    <div className="employee-card">
      <h3>{member.name}</h3>
      {member.image && (
        <img
          src={member.image.formats?.small?.url || member.image.url}
          alt={member.name}
        />
      )}
      <p>
        {member.about.map((paragraph, index) => (
          <span key={index}>
            {paragraph.children.map((child, i) => (
              <span
                key={i}
                style={{
                  fontWeight: child.bold ? "bold" : "normal",
                  fontStyle: child.italic ? "italic" : "normal",
                  textDecoration: child.underline ? "underline" : "none",
                }}
              >
                {child.text}
              </span>
            ))}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Employee;
