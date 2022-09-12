import Header from "./components/Header";
import GlobalStyle from "./globalStyle";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
