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
                padding: 10px;
              }
              
              .content .sub_content .item {
                display: -webkit-flex; /* WebKit-based browsers */
                display: flex;
                -webkit-border-radius: 2px;
                border-radius: 2px;
                -webkit-align-items: center; /* WebKit-based browsers */
                align-items: center;
                margin-bottom: 15px;
              }
              
              .content .sub_content .item a {
                color: #fff;
              }
              
              .content .sub_content .icon {
                width: 15px;
                height: 15px;
                margin-right: 5px;
                display: -webkit-flex; /* WebKit-based browsers */
                display: flex;
                -webkit-justify-content: center; /* WebKit-based browsers */
                justify-content: center;
                -webkit-align-items: center; /* WebKit-based browsers */
                align-items: center;
                background: #FC413C;
              }
            `}
          </style>

          {(data.email !== "" || data.phoneNumber !== "") && (
            <div className="content">
              <h2>Contact</h2>
              <div className="sub_content">
                <div className="item">
                  <div className="icon">
                    <AiOutlineMail />
                  </div>
                  <a href={`mailto:${data.email}`}>{data?.email}</a>
                </div>
                <div className="item">
                  <div className="icon">
                    <AiOutlinePhone fill="#ffffff" />
                  </div>
                  <a href={`tel:${data.phoneNumber}`}>{data.phoneNumber}</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    )
  );
}

export default Contacts;
