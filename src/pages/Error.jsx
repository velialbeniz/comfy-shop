import { useRouteError, Link } from "react-router-dom";

const Error = () => {
	const error = useRouteError();
	if (error.status === 404) {
		return (
			<main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
				<h1 className="text-3xl font-bold tracking-tight text-gray-900">Page not Found 404 Error</h1>
				<p className="mt-6 text-base leading-7 text-gray-600">{error.statusText || error.message}</p>
				<p className="mt-6 text-base leading-7 text-gray-600">Sorry we didn't find what you were looking for.</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<button className="btn btn-sm btn-outline btn-primary">
						<Link to="/">Go Home</Link>
					</button>
				</div>
			</main>
		);
	}

	return <div>Error</div>;
};
export default Error;
