import { useEffect, useState } from "react";

const LoadingPage: React.FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {show ? (
        <div className="block_loader">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="block_loader"></div>
      )}
    </>
  );
};

export default LoadingPage;
