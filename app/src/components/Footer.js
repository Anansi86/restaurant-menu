function GetFooter() {
  return (
    <div className="card-group">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Address</h5>
        </div>
        <div className="card-footer">
          <small className="text-muted">348 E Main St, Lexington, KY</small>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.222607938503!2d-84.4925971!3d38.041899099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e8450f877b%3A0x18daf8ec8d375b08!2sE%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1665692737512!5m2!1sen!2sus"
            style={{ display: "flex", width: "100%", height: "50%", border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Contact Info</h5>
        </div>
        <div className="card-footer">
          <small className="text-muted">Phone: (859) 321-6963</small>
          <small className="text-muted">Email: s.albert.staton@gmail.com</small>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Social Media</h5>
        </div>
        <div className="card-footer">
          <small className="text-muted"></small>
        </div>
      </div>
    </div>
  );
}

export default GetFooter;
