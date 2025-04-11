import React from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  containerId?: string;
}

const Portal: React.FC<PortalProps> = ({ children, containerId = 'portal-root' }) => {
  let portalContainer = document.getElementById(containerId);

  if (!portalContainer) {
    portalContainer = document.createElement('div');
    portalContainer.id = containerId;
    document.body.appendChild(portalContainer);
  }

  return ReactDOM.createPortal(children, portalContainer);
};

export default Portal;
