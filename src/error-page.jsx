import { useRouteError } from "react-router-dom";
import Background from "./assets/background.png";
const Error = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<div
			id='error-page'
			style={{
				backgroundImage: `url(${Background})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				height: "100vh",
				width: "100vw",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
};

export default Error;
