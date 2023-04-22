import "./module.css"
const Chip = ({ label, onClick }) => {
  return (
    <div className="chip" onClick={onClick}>
      {label}
    </div>
  );
};
export default Chip;
