import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
	const location = useLocation();
	const { isAuth } = useSelector((state) => state.user);

	if (isAuth) {
		return children;
	} else {
		return <Navigate to='/login' replace state={{ from: location }} />;
	}
}

export default PrivateRoute;

