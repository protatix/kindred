const Button = ({ text, type, onClick, className }) => (
  <button onClick={onClick} className={className} type={type} value={text}>
    {text}
  </button>
)

export default Button
