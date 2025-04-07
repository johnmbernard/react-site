import React from "react";
import SignIn from "./components/SignIn";
import DynamicForm from "./components/PostForm";

const App = () => {
  return (
    <>
      <div>
        <h1>Firebase Authentication</h1>
        <ErrorBoundary>
          <SignIn />
        </ErrorBoundary>
      </div>

      <div>
        <ErrorBoundary>
          <DynamicForm />
        </ErrorBoundary>
      </div>
    </>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

export default App;
