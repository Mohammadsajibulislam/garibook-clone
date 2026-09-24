import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error("Garibook UI error:", error, info);
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div
        role="alert"
        className="mx-auto flex min-h-[60vh] max-w-[560px] flex-col items-start justify-center gap-4 px-6 py-16"
      >
        <h1 className="m-0 text-[28px] font-bold text-brand-ink">
          Something went wrong
        </h1>
        <p className="m-0 text-[16px] leading-relaxed text-brand-muted-2">
          An unexpected error occurred while rendering this page.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-lg bg-brand-blue px-5 py-3 font-semibold text-white"
          >
            Reload page
          </button>
          <a
            href="/"
            className="rounded-lg border border-brand-line px-5 py-3 font-semibold text-brand-ink"
          >
            Go home
          </a>
        </div>
      </div>
    );
  }
}
