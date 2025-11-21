import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { PATH } from "./constants.ts"
import Auth from "./pages/Auth/Auth.tsx"
import { Provider } from "react-redux"
import { store } from "./store/index.ts"

const router = createBrowserRouter([
    {
        path: PATH.BASE,
        element: <App />,
        errorElement: <div>Ошибка!</div>,
        children: [
            { index: true, element: <></> },
        ]
    },
    {
        path: PATH.AUTH,
        element: <Auth />
    }
])

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
)
