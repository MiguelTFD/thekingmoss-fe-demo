import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Page from "@/app/dashboard/page";
import HomePageContainer from "@/pageContainers/HomePageContainer/HomePageContainer";
import LoginPageContainer from "@/pageContainers/LoginPageContainer/LoginPageContainer";
import ProductsPageContainer from "@/pageContainers/ProductsPageContainer/ProductsPageContainer.tsx";
import CategoriesPageContainer from "@/pageContainers/CategoriesPageContainer/CategoriesPageContainer.tsx";
import OrdersPageContainer from "@/pageContainers/OrdersPageContainer/OrdersPageContainer.tsx";
import CustomersPageContainer from "@/pageContainers/CustomersPageContainer/CustomersPageContainer.tsx";
import UserPageContainer from "@/pageContainers/UserPageContainer/UserPageContainer.tsx";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPageContainer />} />
                    <Route element={<Page/>}>
                        <Route path="/" element={<HomePageContainer />} />
                        <Route path="/productos" element={<ProductsPageContainer />} />
                        <Route path="/categorias" element={<CategoriesPageContainer />} />
                        <Route path="/pedidos" element={<OrdersPageContainer />} />
                        <Route path="/clientes" element={<CustomersPageContainer />} />
                        <Route path="/usuarioDetalle" element={<UserPageContainer />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
