import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

function Contacts({ data, templateData }) {
  return (
    (data.state ||
      data.country ||
      data.email ||
      data.phoneNumber ||
      data.city ||
      data.zipCode) && (
      <section className="section">
        <div>
          <style>
            {`
             .artistic-one .content {
              padding: 22px;
              display: -webkit-flex; /* WebKit-based browsers */
              display: flex;
              -webkit-justify-content: center; /* WebKit-based browsers */
              justify-content: center;
              -webkit-align-items: center; /* WebKit-based browsers */
              align-items: center;
            }
            
            .artistic-one .content .sub_content {
              display: -webkit-flex; /* WebKit-based browsers */
              display: flex;
              margin: 0 auto;
            }
            
            .artistic-one .content .sub_content .item {
              display: -webkit-flex; /* WebKit-based browsers */
              display: flex;
              -webkit-border-radius: 2px;
              border-radius: 2px;
              -webkit-align-items: center; /* WebKit-based browsers */
              align-items: center;
            }
            
            /* Create gap between flex items using negative margin */
            .artistic-one .content .sub_content .item + .item {
              margin-left: 10px; /* Adjust this value to control the gap */
            }
            
            .artistic-one .content .sub_content .icon {
              width: 25px;
              height: 25px;
              background:  ${templateData?.theme?.color || "blue"};;
              margin-right:5px;
              color:#ffffff;
              display: -webkit-flex; /* WebKit-based browsers */
              display:flex;
              -webkit-justify-content: center; /* WebKit-based browsers */
              justify-content:center;
              -webkit-align-items: center; /* WebKit-based browsers */
              align-items:center
            }
            `}
          </style>
          <div className="content">
            <div className="sub_content">
              {data?.email && (
                <div className="item">
                  <div className="icon">
                    <AiOutlineMail color="#ffffff" fill="#ffffff" />
                  </div>
                  <div className="">
                    <a href={`mailto:${data.email}`}>{data.email}</a>
                  </div>
                </div>
              )}
              {data?.phoneNumber && (
                <div className="item">
                  <div className="icon">
                    <AiOutlinePhone fill="#ffffff" />
                  </div>
                  <div className="">
                    <a href={`tel:${data.phoneNumber}`}>{data.phoneNumber}</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  );
}

export default Contacts;
