import { useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center p-4">
      <h1 className="gotu-regular">Oops!</h1>
      <p className="gabarito-regular">Sorry, an unexpected error has occurred.</p>
      <p className="gabarito-regular">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
  
export default Error;