import TaskList from "./components/ToDoList";
import Counter from "./components/Counter";
import RandomName from "./components/RandomName";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const AppContent = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div>
      <button onClick={toggleDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
      <TaskList />
      <Counter />
      <RandomName />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;