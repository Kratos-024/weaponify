import React, { useEffect, useRef } from "react";

const SketchfabModelViewer = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Function to hide Sketchfab UI elements via CSS injection
    const hideSketchfabUI = () => {
      if (iframeRef.current) {
        const iframe = iframeRef.current;
        // When iframe loads, we'll try to modify its content
        //@ts-ignore
        iframe.onload = () => {
          try {
            // Attempt to access the iframe's contentDocument to inject CSS

            const iframeDocument =
              //@ts-ignore
              iframe.contentDocument || iframe.contentWindow.document;

            // Create a style element to inject custom CSS
            const styleElement = iframeDocument.createElement("style");
            styleElement.textContent = `
              .logo-container, .footer, .header__title, .header__share, .owner, 
              .header__menu-button, .header__title-link, .annotation, .fullscreen-button {
                display: none !important;
                opacity: 0 !important;
                visibility: hidden !important;
              }
              .model-info {
                display: none !important;
              }
            `;

            // Append the style element to the iframe's head
            iframeDocument.head.appendChild(styleElement);
          } catch (error) {
            // Cross-origin restrictions might prevent this from working
            console.log(
              "Could not modify iframe content due to cross-origin policy"
            );
          }
        };
      }
    };

    hideSketchfabUI();

    // Clean up
    return () => {
      if (iframeRef.current) {
        //@ts-ignore
        iframeRef.current.onload = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-screen bg-gray-900 p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">MP7A1 3D Model Viewer</h1>

      <div className="w-full h-5/6 relative overflow-hidden rounded-lg">
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-900 z-10"></div>

        <div className="sketchfab-embed-wrapper w-full h-full">
          <div className="sketchfab-embed-wrapper">
            {" "}
            <div>
              <iframe
                title="T-90"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src="https://sketchfab.com/models/9bb8af8876a6478aa92089eff058d4db/embed"
                style={{ width: "100%", height: "480px" }}
              ></iframe>
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default SketchfabModelViewer;
