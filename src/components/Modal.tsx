import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const modal = (
    <div className="fixed inset-0 flex items-center justify-center z-[99999] min-h-screen bg-[#242878cc] bg-opacity-70 transition-all">
      <div
        ref={ref}
        className="bg-white w-full max-w-md mx-2 rounded-2xl shadow-2xl relative p-0 overflow-auto max-h-[90vh] animate-fade-in-up z-[100000]"
      >
        {children}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-[#3a3ad9] text-lg font-bold"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          &times;
        </button>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default Modal;
