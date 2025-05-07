
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import MainRoutes from "./routes/MainRoutes";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <div> {/* Replaced TooltipProvider with a simple div */}
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <MainRoutes />
          </BrowserRouter>
        </div>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
