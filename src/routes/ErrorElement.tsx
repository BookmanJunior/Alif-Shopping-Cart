import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";

export default function ErrorElement() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorBody errorStatus={error.status} errorText={error.statusText} />
    );
  }
}

interface ErrorBody {
  errorStatus?: number;
  errorText: string;
}

function ErrorBody({ errorStatus, errorText }: ErrorBody) {
  return (
    <main className="min-h-[100vh] grid place-content-center text-center gap-2">
      {errorStatus && <h1 className="text-3xl font-bold">{errorStatus}</h1>}
      <h2 className="text-xl font-bold">{errorText}</h2>
      <Link className="button inline-block" to="/">
        Go Back
      </Link>
    </main>
  );
}
