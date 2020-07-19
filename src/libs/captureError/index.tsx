import * as React from "react";

export interface IErrorBoundaryProps {
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<IErrorBoundaryProps, any> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    console.warn(error);
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // También puedes registrar el error en un servicio de reporte de errores
    console.warn(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de repuesto
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
