function Logo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#1f7a4d" />
      <path
        d="M20 8C20 8 11 10 11 20C11 27 15.5 32 20 33.5C24.5 32 29 27 29 20C29 10 20 8 20 8Z"
        fill="#c6f135"
      />
      <path
        d="M20 13V30"
        stroke="#1f7a4d"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M20 18C20 18 15.5 19.5 15.5 24"
        stroke="#1f7a4d"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M20 23C20 23 24.5 24.5 24.5 28.5"
        stroke="#1f7a4d"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Logo;