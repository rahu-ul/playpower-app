import { useEffect, useRef } from 'react';

const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

/**
 * Traps focus within `containerRef` while active.
 * Also handles Escape key to call `onClose`.
 * @param {React.RefObject} containerRef - ref to the modal container element
 * @param {function} onClose - called when Escape is pressed
 * @param {boolean} [active=true] - whether the trap is active
 */
export function useFocusTrap(containerRef, onClose, active = true) {
  // Store the element that was focused before the trap activated
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    // Save previously focused element for restoration
    previousFocusRef.current = document.activeElement;

    function getFocusable() {
      if (!containerRef.current) return [];
      return Array.from(containerRef.current.querySelectorAll(FOCUSABLE_SELECTORS)).filter(
        (el) => !el.closest('[hidden]') && getComputedStyle(el).display !== 'none'
      );
    }

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = getFocusable();
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          // Shift+Tab — if focus is at first, wrap to last
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          // Tab — if focus is at last, wrap to first
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // Restore focus to the element that was focused before the trap
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
      }
    };
  }, [active, containerRef, onClose]);
}
