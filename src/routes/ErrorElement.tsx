import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";

export default function ErrorElement() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <main>
        <h1>{error.status}</h1>
        <h2>{error.statusText}</h2>
        <Link to="/">Go Back</Link>
      </main>
    );
  }
}
