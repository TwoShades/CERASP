import "./css/Partners.css";

const Partners = ({ partner }) => {
  return (
    <div className="partner-card" style={{ background: partner.color }}>
      <h3>{partner.name}</h3>
    </div>
  );
};

export default Partners;

// Dummy Data (Still Inside the Same File)
export const partnersData = [
  { name: "Partner One", color: "linear-gradient(135deg, #00D2FF, #B2F2BB)" },
  { name: "Partner Two", color: "linear-gradient(135deg, #5D9CEC, #A3D9FF)" },
  { name: "Partner Three", color: "linear-gradient(135deg, #56D4A5, #8BE4D1)" },
  { name: "Partner Four", color: "linear-gradient(135deg, #2E3A87, #A6C8FF)" },
  { name: "Partner Five", color: "linear-gradient(135deg, #48C9B0, #80FFCB)" },
  { name: "Partner Six", color: "linear-gradient(135deg, #2A9D8F, #5ED7D3)" },
  { name: "Partner Seven", color: "linear-gradient(135deg, #72C6A3, #D0F2E1)" },
  { name: "Partner Eight", color: "linear-gradient(135deg, #6C7A89, #B3C6C5)" },
  { name: "Partner Nine", color: "linear-gradient(135deg, #3B6F91, #A8D0F0)" },
  { name: "Partner Ten", color: "linear-gradient(135deg, #55B7B8, #C9E9F7)" },
  {
    name: "Partner Eleven",
    color: "linear-gradient(135deg, #76D7C4, #A9E6D9)",
  },
  {
    name: "Partner Twelve",
    color: "linear-gradient(135deg, #34495E, #A4BCC2)",
  },
];
