const Notification = (props) => {
  //  Write your code here.
  const { className, text, url, image } = props;
  return (
    <div className={className}>
      <img className={image} src={url} />
      <p>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div>
      <h1 className="heading">Notifications</h1>
      <Notification
        className="div-1"
        text="Information Message"
        image="image"
        url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="div-2"
        text="Success Message"
        image="image"
        url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="div-3"
        text="Warning Message"
        image="image"
        url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="div-4"
        text="Error Message"
        image="image"
        url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
