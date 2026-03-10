export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-left">
        <h1 className="contact-headline">Get in touch.</h1>
        <p className="contact-body">I'm looking for an end-to-end product design role where design owns outcomes from problem definition through launch. Let's talk.</p>
      </div>
      <div className="contact-cards-stack">
        <div className="contact-card-item">
          <div className="contact-icon">✉</div>
          <div className="contact-info">
            <div className="contact-label">Email</div>
            <a href="mailto:nicholas.a.kazmer@gmail.com" className="contact-value">nicholas.a.kazmer@gmail.com</a>
          </div>
        </div>
        <div className="contact-card-item">
          <div className="contact-icon">☞</div>
          <div className="contact-info">
            <div className="contact-label">LinkedIn</div>
            <a href="https://linkedin.com/in/nkazmer" target="_blank" rel="noreferrer" className="contact-value">linkedin.com/in/nkazmer</a>
          </div>
        </div>
        <div className="contact-card-item">
          <div className="contact-icon">▪</div>
          <div className="contact-info">
            <div className="contact-label">Location</div>
            <div className="contact-value">Minneapolis, MN</div>
          </div>
        </div>
      </div>
    </section>
  )
}
