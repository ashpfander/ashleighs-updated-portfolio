function Contact() {
  return (
  <form className="contact-form mt-4">
    <h2 className="text-center kalam-bold pb-3">Leave me a message!</h2>
    <div className="form-floating mb-3">
      <input type="text" class="form-control" id="floatingInput" placeholder="name" />
      <label for="floatingInput">Name</label>
    </div>
    <div className="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
      <label for="floatingInput">Email</label>
    </div>
    <div class="form-floating">
      <textarea class="form-control" placeholder="Leave a message here" id="floatingTextarea2" style={{height: '100px'}}></textarea>
      <label for="floatingTextarea2">Message</label>
    </div>
      <button type="submit" className="p-3 mt-3 gabarito-regular">Submit</button>
    </form>
    );
  }
  
  export default Contact;