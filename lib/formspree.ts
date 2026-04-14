export function getFormspreeAction(formId?: string): string {
  return `https://formspree.io/f/${formId || "your-form-id"}`;
}
