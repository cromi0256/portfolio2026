import { useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPdf = async () => {
    if (isDownloading) return;
    setIsDownloading(true);

    try {
      const element = document.getElementById('portfolio-page');
      if (!element) return;

      const originalScrollPos = window.scrollY;
      window.scrollTo(0, 0);

      // Render canvas with hi-res scale
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#10141a',
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      const pageHeight = pdf.internal.pageSize.getHeight();

      let heightLeft = pdfHeight;
      let position = 0;

      // First page
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;

      // Subsequent pages if content overflows A4 height
      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('김영환_데이터과학자_포트폴리오.pdf');
      window.scrollTo(0, originalScrollPos);
    } catch (error) {
      console.error('PDF generation error, executing print fallback:', error);
      window.print();
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#10141a] text-[#dfe2eb] flex flex-col selection:bg-[#acc7ff] selection:text-[#00285b]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="portfolio-page" className="flex-1 max-w-[1024px] w-full mx-auto px-6 py-6 space-y-12">
        {/* Section: Project 01 (Replaces Hero, Vision, Expertise) */}
        <ProjectSection
          onDownloadPdf={handleDownloadPdf}
          isDownloading={isDownloading}
        />

        {/* Section: Contact */}
        <ContactSection />
      </main>
    </div>
  );
}
