import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FETCH_SERVICES_REQUESTED } from '../store/actions';
import type { RootState } from '../store/types';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';

function ServiceListPage() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.list
  );

  useEffect(() => {
    dispatch({ type: FETCH_SERVICES_REQUESTED });
  }, [dispatch]);

  if (loading) return <Spinner />;
  if (error)
    return (
      <ErrorView
        message={error}
        onRetry={() => dispatch({ type: FETCH_SERVICES_REQUESTED })}
      />
    );

  return (
    <div className="service-list-page">
      <h1>Список услуг</h1>
      <ul className="service-list">
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/${item.id}/details`}>
              {item.name} — {item.price} ₽
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceListPage;