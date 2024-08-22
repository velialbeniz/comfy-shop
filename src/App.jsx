import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: "/products",
				element: <Products />,
			},
			{
				path: "/products/:id",
				element: <SingleProduct />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/checkout",
				element: <Checkout />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
