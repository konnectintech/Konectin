function Education({ education, currentEditedEducation }) {
  return (
    currentEditedEducation >= 1 && (
      <section className="section">
        <style>
          {`
            .section {
              margin-right: 15px;
              -webkit-flex: 1; /* WebKit-based browsers */
              flex: 1;
            }
            
            .education-text {
              font-family: poppins;
              font-size: 10px;
              color: #333333;
            }
            
            .education-item {
              border-left: 4px solid #EEEFF1;
              margin-bottom: 8px;
              padding-left: 8px;
            }
            
            .education-info {
              display: -webkit-flex; /* WebKit-based browsers */
              display: flex;
              -webkit-justify-content: space-between; /* WebKit-based browsers */
              justify-content: space-between;
              -webkit-align-items: center; /* WebKit-based browsers */
              align-items: center;
            }
            
            .education-year {
              white-space: nowrap;
            }
          `}
        </style>
        <div className="education-section">
          <h2>Education</h2>
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
