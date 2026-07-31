import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { FETCH_DETAILS_REQUESTED } from '../store/actions';
import type { RootState } from '../store/types';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';

function ServiceDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.details
  );

  useEffect(() => {
    if (id) dispatch({ type: FETCH_DETAILS_REQUESTED, payload: Number(id) });
  }, [dispatch, id]);

  if (loading) return <Spinner />;
  if (error)
    return (
      <ErrorView
        message={error}
        onRetry={() =>
          dispatch({ type: FETCH_DETAILS_REQUESTED, payload: Number(id) })
        }
      />
    );

  if (!data) return null;

  return (
    <div className="service-details-page">
      <Link to="/" className="back-link">← Назад</Link>
      <h1>{data.name}</h1>
      <p className="price">{data.price} ₽</p>
      <p className="content">{data.content}</p>
    </div>
  );
}

export default ServiceDetailsPage;