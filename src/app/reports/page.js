


'use client'
import { SecondNavbar } from '@/component/SecondNav';
import { reportSections } from '@/constant/reportsection';
import { ReportHeader } from '@/section/report/reportheader';
import { ReportPreview } from '@/section/report/reportpreview';
import { ReportSection } from '@/section/report/reportsection';
import { useState } from 'react';


export default function Reports() {
  const [openSection, setOpenSection] = useState(null);
  const [isViewing, setIsViewing] = useState(false);

 

  const handleDownload = () => {
    // Simulate download
    console.log("Downloading sample report...");
    alert("Sample report download started!");
  };

  const handleView = () => {
    setIsViewing(!isViewing);
  };

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <>
      <SecondNavbar/>
      <ReportHeader/>
      
      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <ReportPreview
            onDownload={handleDownload} 
            onView={handleView} 
          />

          {isViewing && (
            <div className="mb-8 p-6 border border-white bg-gray-900">
              <h3 className="text-2xl text-white mb-4">Full Report Viewer</h3>
              <div className="h-96 bg-gray-800 flex items-center justify-center">
                <p className="text-gray-400">Interactive report viewer would appear here</p>
              </div>
            </div>
          )}

          <h2 className="text-4xl font-bold text-white mb-8">REPORT SECTIONS</h2>
          <div className="border border-white">
            {reportSections.map((section, index) => (
              <ReportSection
                key={index}
                title={section.title}
                content={section.content}
                isOpen={openSection === index}
                onClick={() => toggleSection(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}