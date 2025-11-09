import React, { type ErrorInfo } from 'react';
import { ErrorBoundary } from "react-error-boundary";

function ErrorBoundaryComponent({ children }: React.PropsWithChildren) {

  const logError = (error: Error, info: ErrorInfo) => {
    // Do something with the error, e.g. log to an external API
    const bodyData = {
      level: "ERROR",
      datetime: new Date().toUTCString(),
      platform: (navigator as any).userAgentData.platform,
      isMobile: (navigator as any).userAgentData.mobile,
      url: window.location.href,
      error,
      info
    }

    console.log('log error boundary: ', bodyData)
  };

  function fallbackRender() {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      {/* <pre style={{ color: "red" }}>{error?.message}</pre> */}
    </div>
  );
}

  return (
    <ErrorBoundary fallback={fallbackRender()} onError={logError}>
     {children}
    </ErrorBoundary>
  )
}

export default ErrorBoundaryComponent