import "./StatusMessage.css";

interface StatusMessageProps {
  type: "loading" | "success" | "error";
  message: string;
}

function StatusMessage({ type, message }: StatusMessageProps) {
  return (
    <div className={`status-message status-message--${type}`} role={type === "error" ? "alert" : "status"} aria-live={type === "error" ? "assertive" : "polite"}>
      {message}
    </div>
  );
}

export default StatusMessage;
