import Modal from "./Modal";
import "./ConfirmModal.css";

export default function ConfirmModal({
  isOpen,
  message = "Are you sure?",
  onConfirm,
  onCancel,
  isLoading,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onCancel} title="Confirm Delete">
      <div className="confirm-body" style={{ padding: "10px 0" }}>
        <p className="confirm-message" style={{ marginBottom: "20px" }}>{message}</p>
        <div className="confirm-actions" style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <button className="btn-cancel" onClick={onCancel} disabled={isLoading}>
            Cancel
          </button>
          <button className="btn-delete" onClick={onConfirm} disabled={isLoading}>
            {isLoading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </Modal>
  );
}
