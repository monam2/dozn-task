export const BookmarkIcon = ({ isActive }: { isActive: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-7 h-8 transition-colors duration-200 ${
      isActive ? "text-blue-500" : "text-gray-200"
    }`}
  >
    <path
      fillRule="evenodd"
      d="M6.32 2.577A49.255 49.255 0 0112 2.25c1.942 0 3.79.12 5.68.327A2.25 2.25 0 0120 4.806v16.657a.75.75 0 01-1.145.636L12 18.25l-6.855 3.849A.75.75 0 014 21.464V4.806a2.25 2.25 0 012.32-2.229z"
      clipRule="evenodd"
    />
  </svg>
);
