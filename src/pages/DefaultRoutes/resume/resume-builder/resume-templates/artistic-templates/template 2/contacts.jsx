import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
function Contacts({ data }) {
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
             .content {
              padding: 22px;
              display: -webkit-flex; /* WebKit-based browsers */
              display: flex;
              -webkit-justify-content: center; /* WebKit-based browsers */
              justify-content: center;
              -webkit-align-items: center; /* WebKit-based browsers */
              align-items: center;
            }
            
            .content .sub_content {
              display: -webkit-flex; /* WebKit-based browsers */
              display: flex;
              margin: 0 auto;
            }
            
            .content .sub_content .item {
              display: -webkit-flex; /* WebKit-based browsers */
              display: flex;
              -webkit-border-radius: 2px;
              border-radius: 2px;
              -webkit-align-items: center; /* WebKit-based browsers */
              align-items: center;
            }
            
            .item {
              border-left: 4px solid #EEEFF1;
              margin-bottom:8px;
              padding-left:8px
            }
            /* Create gap between flex items using negative margin */
            .content .sub_content .item + .item {
              margin-left: 10px; /* Adjust this value to control the gap */
             
            }
            
            .content .sub_content .icon {
              width: 25px;
              height: 25px;
              margin-right:5px;
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
              <div className="item">
                <div className="icon">
                  <AiOutlineMail />
                </div>
                <div className="">{data?.email}</div>
              </div>
              <div className="item">
                <div className="icon">
                  <AiOutlinePhone />
                </div>
                <div className="">{data?.phoneNumber}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}

export default Contacts;
