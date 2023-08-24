function Education({ education, currentEditedEducation }) {
  return (
    currentEditedEducation >= 1 && (
      <section className="section">
        <style>
          {`
        
        
        .education-section {
          padding:10px;
          padding-bottom:0
        }

        .education-heading {
          background:#7C91FF;
          color:#000000 !important;
          padding:10px;
          text-align:center;
          border-radius:20px

        }
        
        .education-text {
          font-family: poppins;
          font-size: 10px;
        }
        
        .education-detail {
          padding:5px;
          border-radius:3px
        }
        
        .education-item {
          margin-bottom: 8px;
        }
        
        .education-info {
        }
        
        .education-year {
          font-size: 10px;
          white-space: nowrap;
        }
        


          `}
        </style>
        <div className="education-section">
          <h2 className="education-heading">Education</h2>
          <div className="education-detail">
            {education.map((edu, index) => {
              const { schoolName, degree, year } = edu;
              return (
                <div className="education-item" key={index}>
                  <div className="education-info">
                    <h3>{schoolName}</h3>
                    <div className="education-year">
                      {year} - {year}
                    </div>
                  </div>
                  <span>{degree || schoolName}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    )
  );
}

export default Education;
