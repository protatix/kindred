const Input = ({ label, value, onChange, className }) => (
  <label className="block">
    <input
      placeholder={label}
      value={value}
      onChange={onChange}
      className={className}
    />
  </label>
)

export default Input
