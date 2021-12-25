function Button({ color, text }) {
  return (
    <button style={{ background: color }} className="btn">
      {text}
    </button>
  );
}

export default Button;
