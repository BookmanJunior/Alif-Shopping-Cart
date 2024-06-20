import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";

export default function ErrorElement() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <main className="min-h-[100vh] grid place-content-center text-center gap-2">
        <h1 className="text-3xl font-bold">{error.status}</h1>
        <h2 className="text-xl font-bold">{error.statusText}</h2>
        <Link className="button inline-block" to="/">
          Go Back
        </Link>
      </main>
    );
  }
}
