import { useEffect, useRef } from 'react';

const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

// Stack of currently mounted traps. Only the top-most trap reacts to keys, so a
// Lightbox opened over the Photo Tour owns Tab/Escape until it closes.
const trapStack = [];

/**
 * Traps focus within `containerRef` while mounted and handles Escape.
 * - Only the top-most (most recently mounted) trap handles Tab / Escape.
 * - Focus is restored to the previously focused element once, on unmount.
 * - `onClose` is read through a ref, so a new callback identity on re-render does
 *   not re-run the effect (which used to steal focus back to the page).
 */
export function useFocusTrap(containerRef, onClose) {
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    const token = {};
    const previouslyFocused = document.activeElement;
    trapStack.push(token);

    function getFocusable() {
      if (!containerRef.current) return [];
      return Array.from(containerRef.current.querySelectorAll(FOCUSABLE_SELECTORS)).filter(
        (el) => !el.closest('[hidden]') && getComputedStyle(el).display !== 'none'
      );
    }

    function handleKeyDown(e) {
      if (trapStack[trapStack.length - 1] !== token) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onCloseRef.current();
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
        const active = document.activeElement;
        const inside = containerRef.current?.contains(active);

        if (!inside) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      const i = trapStack.indexOf(token);
      if (i !== -1) trapStack.splice(i, 1);
      if (previouslyFocused && document.contains(previouslyFocused)) {
        previouslyFocused.focus();
      }
    };
  }, [containerRef]);
}
