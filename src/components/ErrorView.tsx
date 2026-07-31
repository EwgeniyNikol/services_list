interface Props {
  message: string;
  onRetry: () => void;
}

function ErrorView({ message, onRetry }: Props) {
  return (
    <div className="error-view">
      <p className="error-message">{message}</p>
      <button className="retry-btn" onClick={onRetry}>
        Повторить запрос
      </button>
    </div>
  );
}

export default ErrorView;