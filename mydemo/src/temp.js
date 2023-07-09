<form method='POST'>
  <div>
    <label>Enter Your Email Address</label>
    <input type="email" class="form-control" value={inpval.email} onChange={setdata} name="email" />
  </div>
  <div className="form-group">
    <label >Enter Your Contact Number</label>
    <input type="text" value={inpval.contact} onChange={setdata} name="contact" />
  </div>
  <div >
  <label>Enter Your Details</label>
    <input type="text"  value={inpval.detail} onChange={setdata} name="detail" />
  
  </div>
  <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
</form>
