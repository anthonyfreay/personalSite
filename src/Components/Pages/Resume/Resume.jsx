import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import Navbar from '../../Util/Navbar/Navbar';
import Footer from '../../Util/Footer/Footer';
import ResumeStyle from './Resume.module.css';
import { FaDownload, FaArrowUpRightFromSquare } from 'react-icons/fa6';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const resumePath = '/resume_anthony_freay.pdf';

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className={ResumeStyle['resume-container']}>
            <Helmet>
                <title>Résumé | Anthony Freay</title>
                <meta name="description" content="The résumé of Anthony Freay, a software engineer and photographer based in NYC." />
                <link rel="canonical" href="https://anthonyfreay.com/resume" />

                <meta property="og:title" content="Résumé | Anthony Freay" />
                <meta property="og:description" content="The résumé of Anthony Freay, a software engineer and photographer based in NYC." />
                <meta property="og:image" content="https://anthonyfreay.com/me/RX706334-Enhanced-NR-color.jpg" />
                <meta property="og:url" content="https://anthonyfreay.com/resume" />

                <meta name="twitter:title" content="Résumé | Anthony Freay" />
                <meta name="twitter:description" content="The résumé of Anthony Freay, a software engineer and photographer based in NYC." />
                <meta name="twitter:image" content="https://anthonyfreay.com/me/RX706334-Enhanced-NR-color.jpg" />
            </Helmet>
            <Navbar />

            <div className={ResumeStyle['resume-content']}>
                <div className={ResumeStyle['resume-viewer']}>
                    <div className={ResumeStyle['resume-header']}>
                        <h1>Résumé</h1>
                        <div className={ResumeStyle['header-actions']}>
                            <a
                                href={resumePath}
                                download="Anthony_Freay_Resume.pdf"
                                className={ResumeStyle['download-button']}
                            >
                                <FaDownload aria-hidden="true" />
                                <span>Download PDF</span>
                            </a>
                            <a
                                href={resumePath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={ResumeStyle['open-button']}
                            >
                                <FaArrowUpRightFromSquare aria-hidden="true" />
                                <span>Open in New Tab</span>
                            </a>
                        </div>
                    </div>

                    <Document
                        file={resumePath}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={
                            <div className={ResumeStyle['pdf-loading']} role="status" aria-live="polite">
                                <div className={ResumeStyle['spinner']} />
                                <p>Loading résumé...</p>
                            </div>
                        }
                        error={
                            <div className={ResumeStyle['pdf-error']} role="alert">
                                <p>Unable to load the PDF.</p>
                                <ul>
                                    <li>Check your internet connection</li>
                                    <li>Try disabling ad/script blockers</li>
                                    <li>Or <a href={resumePath} download>download the PDF directly</a></li>
                                </ul>
                            </div>
                        }
                    >
                        {Array.from(new Array(numPages), (el, index) => (
                            <div key={`page_${index + 1}`} className={ResumeStyle['page-wrapper']}>
                                <Page
                                    pageNumber={index + 1}
                                    width={Math.min(800, window.innerWidth - 80)}
                                    scale={window.devicePixelRatio || 1}
                                    renderMode="svg"
                                    renderTextLayer={true}
                                    className={ResumeStyle['pdf-page']}
                                />
                                {numPages > 1 && (
                                    <div className={ResumeStyle['page-indicator']}>
                                        Page {index + 1} of {numPages}
                                    </div>
                                )}
                            </div>
                        ))}
                    </Document>
                </div>
            </div>
            <Footer activePage="resume" />
        </div>
    );
};

export default Resume;