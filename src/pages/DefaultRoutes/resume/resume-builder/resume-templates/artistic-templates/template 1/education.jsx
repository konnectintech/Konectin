function Education({ education, currentEditedEducation }) {
  return (
    currentEditedEducation >= 1 && (
      <section className="section">
        <style>
          {`
      .education-section {
        padding: 20px;
        padding-bottom: 0;
      }
      
      highlight-bar {
        border: 2px solid #3F3EF4;
        background: #3F3EF4;
        width: 100px;
        margin: 0.5rem 0;
        border-radius: 5px;
      }
      
      .education-text {
        font-family: poppins;
        font-size: 10px;
        color: #333333;
      }
      
      .education-detail {
        display: -webkit-flex; /* WebKit-based browsers */
        display: flex;
        -webkit-flex-wrap: wrap; /* WebKit-based browsers */
        flex-wrap: wrap;
      }
      
      .education-item {
        -webkit-flex: 1; /* WebKit-based browsers */
        flex: 1;
        margin-right: 15px; /* Add margin to create gap */
        margin-bottom: 15px; /* Add margin to create gap */
      }
      
      .education-item:last-child {
        margin-right: 0; /* Remove margin on the last child */
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
        font-size: 10px;
      }
      

          `}
        </style>
        <div className="education-section">
          <h2>Education</h2>
          <div className="highlight-bar" />
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
