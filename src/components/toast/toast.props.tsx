export type ToastProps = {
  message: string | boolean;
  onDismiss(): void;
  type?: string;
};
