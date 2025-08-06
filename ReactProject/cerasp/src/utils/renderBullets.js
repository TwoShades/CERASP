export const renderBullets = (arr, headerText, className = "subpage-bullet-list") => (
  <div className={className}>
    {headerText && <h3>{headerText}</h3>}
    <ul>
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
  </div>
);
