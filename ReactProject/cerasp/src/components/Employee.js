import "./css/Employee.css";

const Employee = ({ member }) => {
  // Extract image URL properly
  const imageUrl =
    Array.isArray(member.image) && member.image.length > 0
      ? member.image[0]?.formats?.small?.url || member.image[0]?.url
      : member.image?.formats?.small?.url || member.image?.url;

  return (
    <div className="employee-card">
      <h3>{member.name}</h3>

      {imageUrl && (
        <img
          className="employee-card-img"
          src={`http://localhost:1337${imageUrl}`}
          alt={member.name}
        />
      )}

      <p>{member.about ? member.about : "No about information available"}</p>

      <a
        href="https://ca.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="linkedin"
          src="/logos/linkedinlogo.png"
          alt="LinkedIn Logo"
        />
      </a>
    </div>
  );
};

export default Employee;
