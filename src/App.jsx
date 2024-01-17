import { QueryClient, QueryClientProvider } from "react-query";
import ExchangeRate from "./components/ExchangeRate.jsx";

const queryClient = new QueryClient(); // Instantiate a new QueryClient instance

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ExchangeRate />
    </QueryClientProvider>
  );
}

export default App;