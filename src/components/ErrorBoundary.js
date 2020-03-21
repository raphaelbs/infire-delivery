import React from "react";
import { configureScope, captureException } from '@sentry/browser';

export default class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    configureScope((scope) => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
    });
    captureException(error);
  }

  render() {
    return this.props.children;
  }
}