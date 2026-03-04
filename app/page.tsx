import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="hero" style={{ padding: "3rem 1.5rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Rent a Garden Shed With Ease
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#444", marginBottom: "2rem" }}>
          Flexible, affordable sheds for your storage and garden needs. Short and long term rentals available!
        </p>
        <div style={{ position: "relative", width: "100%", maxWidth: "700px", margin: "0 auto" }}>
          <Image
            src="https://pixabay.com/get/gc00dc65a3432d518e5ba5b3c24aa0f49c4e3470ea11ce600b91d79e69553f31e3e55a8319ad129e1795ad17ebb0dfbd11a2f4fdf90b416576944d76baadefac3_640.jpg"
            alt="Spacious rental garden shed in a well-manicured backyard"
            fill
            style={{ objectFit: "cover", borderRadius: "16px" }}
            sizes="100vw"
            priority
          />
        </div>
      </section>
      <section style={{ padding: "2.5rem 1.5rem", background: "#f7f7f7" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Why Rent a Garden Shed?</h2>
        <ul style={{ maxWidth: "700px", margin: "0 auto", textAlign: "left", fontSize: "1.1rem" }}>
          <li>✔️ Instant extra space for your tools, bikes, or seasonal items</li>
          <li>✔️ No long-term commitment, rent month-to-month or for the season</li>
          <li>✔️ Professional setup & removal included</li>
          <li>✔️ Multiple shed sizes and styles to fit your needs</li>
        </ul>
      </section>
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>How it Works</h2>
        <ol style={{ maxWidth: "700px", margin: "0 auto", textAlign: "left", fontSize: "1.1rem", paddingLeft: "2rem" }}>
          <li>
            <b>Choose your shed:</b> Pick from several sizes and options.
          </li>
          <li>
            <b>Complete booking:</b> Fill out our quick form and get a personalized quote.
          </li>
          <li>
            <b>Delivery & setup:</b> We deliver and assemble your shed at your preferred location.
          </li>
          <li>
            <b>Easy return:</b> When you're done, we collect the shed—no hassle!
          </li>
        </ol>
      </section>
      <section id="contact" style={{ background: "#e6fff2", padding: "2.5rem 1.5rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>Get Your Free Shed Rental Quote</h2>
        <form
          method="POST"
          action="mailto:simon@bidx.ai"
          style={{ maxWidth: "500px", margin: "0 auto", background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 2px 12px #0001" }}
        >
          <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem" }}>Full Name</label>
          <input type="text" id="name" name="name" required style={{ width: "100%", marginBottom: "1rem" }} />

          <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>Email</label>
          <input type="email" id="email" name="email" required style={{ width: "100%", marginBottom: "1rem" }} />

          <label htmlFor="size" style={{ display: "block", marginBottom: "0.5rem" }}>Preferred Shed Size</label>
          <select id="size" name="size" style={{ width: "100%", marginBottom: "1rem" }}>
            <option value="small">Small (6x4 ft)</option>
            <option value="medium">Medium (8x6 ft)</option>
            <option value="large">Large (10x8 ft)</option>
          </select>

          <label htmlFor="duration" style={{ display: "block", marginBottom: "0.5rem" }}>Rental Duration</label>
          <select id="duration" name="duration" style={{ width: "100%", marginBottom: "1rem" }}>
            <option value="1_month">1 Month</option>
            <option value="season">Whole Season</option>
            <option value="custom">Custom</option>
          </select>

          <button type="submit" style={{ background: "#038e6b", color: "#fff", padding: "0.8rem 2rem", borderRadius: "8px", border: "none", fontSize: "1rem", cursor: "pointer", marginTop: "0.5rem" }}>
            Request Quote
          </button>
        </form>
        <div style={{ textAlign: "center", marginTop: "2rem", color: "#1a5d3a" }}>
          <p>Questions? Email Simon Dutta at <a href="mailto:simon@bidx.ai">simon@bidx.ai</a></p>
        </div>
      </section>
      <footer style={{ textAlign: "center", padding: "2rem 1rem 0.5rem", color: "#888", fontSize: "0.95rem" }}>
        &copy; {new Date().getFullYear()} Garden Shed Rentals by Simon Dutta • All rights reserved
      </footer>
    </main>
  );
}