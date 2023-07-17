import { Suspense, lazy } from "react";

const Spinner = lazy(() => import("../utils/Spinner"));

const LazyImage = ({ src, alt }) => {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
          <img src={src} alt={alt} />
      </Suspense>
    </div>
  );
};


export default LazyImage;