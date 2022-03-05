import React, {useRef} from 'react';

export const HomePage: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const aRef = useRef(null);

  return (
    <React.Fragment>
      <input
        onFocus={() => {
          console.log('123');
        }}
        ref={inputRef}
      />
      <br />
      <div>sads</div>
      {/* {performance.now()} */}
      <br />
      <button
        onClick={() => {
          clearTimeout(aRef.current);
        }}
      >
        Stop
      </button>
    </React.Fragment>
  );
};

export default HomePage;
