import React from "react";
import "./css/ExpertiseGMP.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";

const ExpertiseGMP = () => {
  const features = [
    {
      title: "Manufacturing",
      text:
        "Manufacturing According to GMP (Good Manufacturing Practices) Standards: " +
        "At CERASP, we are a facility that is not GMP-compliant. However, our laboratories and " +
        "production areas are GLP (Good Laboratory Practice) compliant, and we work and " +
        "document according to GMP standards to facilitate technology transfer and the " +
        "preparation of dossiers that will eventually be submitted to regulatory authorities for our " +
        "clients.",
    },
    {
      title: "Develop your Product",
      text:
        "CERASP helps you develop products and manufacturing processes that are GMP compliant (GMP ready, thus ready for transfer). " +
        "Additionally, it is worth noting that we have several partnerships with universities and collaborations with other College Centers for " +
        "Technology Transfer (CCTTs) for projects aimed at industrial partners.",
    },
    {
      title: "Biomanufacturing",
      text: `We specialize in the optimization of bioprocesses, focusing on fermentation-based 
      processes in solid and liquid cultures. Our team has extensive experience in producing 
      enzymes and bioproducts, conducting bioactivity assessments, and employing microbial 
      identification and genomics techniques. We also apply analytical chemistry for specialized 
      applications such as hydrocarbon analysis.`,
    },
  ];

  return (
    <div className="expertise-gmp">
      <h2 className="feature-title">GMP EXPERTISE & BIOMANUFACTURING</h2>

      <div className="expertise-gmp-content">
        <div className="expertise-gmp-image">
          <div className="expertise-gmp-image-content">
            <StockImageFetch
              searchTerm="biologist"
              imgSource="large"
              orientation="landscape"
              page={1}
              perPage={1}
            />
          </div>
        </div>

        <div className="feature-card">
          {features.map((feature, index) => (
            <div key={index} className="feature-text">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseGMP;
