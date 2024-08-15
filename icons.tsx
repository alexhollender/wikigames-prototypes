export const ProgressIndicators = {
  Inactive: () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="#A2A9B1" />
      </svg>
    );
  },
  Active: () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="#3366CC" />
      </svg>
    );
  },
  Correct: () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="#14866D" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.50001 15.475L6.02501 12L4.84167 13.175L9.50001 17.8333L19.5 7.83333L18.325 6.65833L9.50001 15.475Z"
          fill="white"
        />
      </svg>
    );
  },
  Incorrect: () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="#B32424" />
        <path
          d="M17.8333 7.0077L16.6583 5.8327L12 10.491L7.34163 5.8327L6.16663 7.0077L10.825 11.666L6.16663 16.3244L7.34163 17.4994L12 12.841L16.6583 17.4994L17.8333 16.3244L13.175 11.666L17.8333 7.0077Z"
          fill="white"
        />
      </svg>
    );
  },
};

export const Back = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 8C3 8.23041 3.08295 8.43318 3.25806 8.60829L10.5668 15.7512C10.7235 15.9171 10.9263 16 11.1659 16C11.6452 16 12.0138 15.6406 12.0138 15.1613C12.0138 14.9217 11.9124 14.7189 11.765 14.5622L5.0553 8L11.765 1.43779C11.9124 1.28111 12.0138 1.06912 12.0138 0.83871C12.0138 0.359447 11.6452 0 11.1659 0C10.9263 0 10.7235 0.0829493 10.5668 0.239631L3.25806 7.39171C3.08295 7.5576 3 7.76959 3 8Z"
        fill="#202122"
      />
    </svg>
  );
};

export const More = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8Z"
        fill="#202122"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
        fill="#202122"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
        fill="#202122"
      />
    </svg>
  );
};
