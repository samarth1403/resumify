import React from "react";
import { jsPDF as JsPDF } from "jspdf";
import * as htmlToImage from "html-to-image";

type PropsType = {
  componentRef: React.MutableRefObject<HTMLDivElement | null>;
  fileName: string;
};

export const downloadPdf = async ({ componentRef, fileName }: PropsType) => {
  if (!componentRef.current) return;

  try {
    // Generate the image using html-to-image
    const blob = await htmlToImage.toBlob(componentRef.current, {
      pixelRatio: window.innerWidth > 768 ? 2.5 : 4,
    });

    if (!blob) return;

    // Create an image object
    const imgUrl = URL.createObjectURL(blob);
    const img = new Image();
    img.src = imgUrl;

    img.onload = async () => {
      // Initialize jsPDF
      const pdf = new JsPDF({
        unit: "px",
        format: "a4",
        putOnlyUsedFonts: true,
      });
      // Calculate PDF dimensions
      const margin = 0;
      const pdfWidth = pdf.internal.pageSize.getWidth() - margin * 2;
      const pdfHeight = (img.height * pdfWidth) / img.width;
      // Add the image to the PDF
      pdf.addImage(
        img,
        "JPEG",
        margin,
        margin,
        pdfWidth,
        pdfHeight,
        undefined,
        "FAST"
      );

      if (componentRef.current) {
        // Get container and its dimensions
        const rect = componentRef.current.getBoundingClientRect(); // Container dimensions
        const links = componentRef.current.querySelectorAll("a");

        links.forEach((link) => {
          const linkRect = link.getBoundingClientRect(); // Get link position

          // Calculate positions relative to the container
          const left = linkRect.left - rect.left;
          const top = linkRect.top - rect.top;

          // Convert positions to PDF units
          const x = (left / componentRef.current!.offsetWidth) * pdfWidth;
          const y = (top / componentRef.current!.offsetHeight) * pdfHeight;
          const w =
            (linkRect.width / componentRef.current!.offsetWidth) * pdfWidth;
          const h =
            (linkRect.height / componentRef.current!.offsetHeight) * pdfHeight;

          // Apply manual adjustment to remove extra offset
          const adjustedY = y; // Removed offset adjustment

          // Add the clickable link to the PDF
          pdf.link(x, adjustedY, w, h, { url: link.href });
        });
      }
      // Save the PDF
      pdf.save(`${fileName}.pdf`);
      // Clean up the object URL
      URL.revokeObjectURL(imgUrl);
    };
  } catch (error) {
    console.error("Failed to generate PDF:", error);
  }
};
