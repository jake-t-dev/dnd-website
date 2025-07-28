import { ThemeProvider } from "./components/theme-provider";
import AppRoutes from "./router/app-routes";
import "@fontsource/texturina";

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
