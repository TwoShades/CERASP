export const renderBullets = (arr, className = "subpage-bullet-list") => (
  <ul className={className}>
    {arr.map((_, idx) => {
      if (idx % 2 !== 0) return null;
      return (
        <li key={`bullet-${idx}`}>
          <p>
            <strong>{arr[idx]}</strong>: {arr[idx + 1]}
          </p>
        </li>
      );
    })}
  </ul>
);
