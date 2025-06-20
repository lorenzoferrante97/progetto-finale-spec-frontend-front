import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function Portal({ children, domElement }) {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    const portalRoot = document.querySelector(domElement);
    portalRoot && setTarget(portalRoot);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return target ? createPortal(children, target) : null;
}