import React from "react";
import "./css/ExpertiseBioinformatics.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";

const ExpertiseBioinformatics = () => {
  return (
    <div className="expertise-bioinformatics">
      <div className="bioinfo-left">
        <div className="bioinfo-image">
            <StockImageFetch
              searchTerm="microscope"
              imgSource="large"
              orientation="landscape"
              page={1}
              perPage={1}
            />
        </div>

        <p className="caption">At the CERASP, we offer cutting-edge Bioinformatics services
                tailored for both pharmaceutical and healthcare sectors. Our
                Bioinformatics team specializes in leveraging advanced
                computational methods and data analysis techniques to support
                drug discovery, personalized medicine, and biomarker
                identification.<br/> <br/>
                
                 Whether you’re in pharmaceutical development seeking robust
                data-driven solutions or in healthcare requiring precision
                medicine insights, our Bioinformatics services are designed to
                meet your most complex research and clinical challenges with
                innovation and expertise.</p>
      </div>

      <div className="bioinfo-right">
        <div className="fieldBox">
          <h2 className="title">Genomic data analysis</h2>
          <p className="desc">
           Transcriptomics, proteomics, and metabolomics services.
          </p>
        </div>

        <div className="fieldBox">
          <h2 className="title">Comprehensive data insights</h2>
          <p className="desc">
           To optimize therapeutic strategies.
          </p>
        </div>

        <div className="fieldBox">
          <h2 className="title">Accelerated research</h2>
          <p className="desc">
           Through advanced computational methods. Tailored solutions for precision medicine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseBioinformatics;
