import { useEffect, useRef } from "react";

const SketchfabModelViewer = ({ sketchFabUrl }: { sketchFabUrl: string }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const hideSketchfabUI = () => {
      if (iframeRef.current) {
        const iframe = iframeRef.current;
        //@ts-ignore
        iframe.onload = () => {
          try {
            const iframeDocument =
              //@ts-ignore
              iframe.contentDocument || iframe.contentWindow.document;

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

    return () => {
      if (iframeRef.current) {
        //@ts-ignore
        iframeRef.current.onload = null;
      }
    };
  }, []);

  return (
    <div
      className="w-full  h-full bg-white p-1
     text-white"
    >
      <div
        className="w-full h-full relative overflow-hidden
       rounded-lg"
      >
        <div className="sketchfab-embed-wrapper w-full h-full">
          <div className="sketchfab-embed-wrapper">
            {" "}
            <div>
              <iframe
                title="T-90"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src={`${sketchFabUrl}`}
                style={{ width: "100%", height: "100%" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SketchfabModelViewer;
