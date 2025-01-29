import Header from "./components/Header";
import Left from "./components/Left";
import Right from "./components/Right";

function App() {
  return (
    <>
      <Header
        title="Martin Petroski"
        proffesion="Professional service technician"
      />
      <main className="flex flex-row">
        <Left />
        <Right />
      </main>
    </>
  );
}

export default App;
