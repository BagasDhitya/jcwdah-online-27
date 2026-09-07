interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded shadow-sm my-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg
            className="w-6 h-6 text-red-500 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-red-700 font-medium">{message}</p>
        </div>
        {onRetry && (
          <button
            onClick={onRetry}
            className="text-sm bg-red-100 hover:bg-red-200 text-red-800 font-semibold py-1 px-3 rounded transition-colors"
          >
            Coba Lagi
          </button>
        )}
      </div>
    </div>
  );
}
