
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const FloatingOrderButton = () => (
  <a
    href="https://max.ru/join/a4_5L5pExpVEy3qxjuE6RPyHUMtvbq-6MzLIhrts1PM"
    target="_blank"
    rel="noopener noreferrer"
    className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg text-sm font-semibold active:scale-95 transition-transform"
  >
    <img
      src="https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/59c821b6-54a1-4b83-b1f9-483cfbde17e0.png"
      alt="Max"
      className="w-4 h-4"
    />
    Заказать расчёт
  </a>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingOrderButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;