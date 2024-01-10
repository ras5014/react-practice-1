function App() {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];

  const genRandomInt = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };

  const description = reactDescriptions[genRandomInt(2)];

  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
