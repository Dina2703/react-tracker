function App() {
  const name = "Dan";

  const x = true;

  return (
    <div className="container">
    {/* conditional using ternary operator*/}
      <h1>Hello { x ? 'yes' : 'no'}</h1>
      <h3>hello {name}</h3>
    </div>
  );
}

export default App;
