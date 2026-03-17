import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error-container">
            <h1>{err.status} : {err.statusText}</h1>
            <h2>Message: {err.error.message}</h2>
        </div>
    )
}

export default Error;