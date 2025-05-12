export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1 style={{ color: '#2d2d2d' }}>Contact Us</h1>
      <p>Have a question or want to partner? Fill out the form below and we’ll be in touch soon.</p>
      
      <form
        action="https://formspree.io/f/mdkglrpb"
        method="POST"
        style={{ maxWidth: '500px', marginTop: '1rem' }}
      >
        <label>
          Your Name:
          <input type="text" name="name" required style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }} />
        </label>
        <br /><br />
        <label>
          Your Email:
          <input type="email" name="email" required style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }} />
        </label>
        <br /><br />
        <label>
          Message:
          <textarea name="message" rows="5" required style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}></textarea>
        </label>
        <br /><br />
        <button type="submit" style={{ padding: '0.5rem 1rem', background: '#28a745', color: '#fff', border: 'none' }}>
          Send
        </button>
      </form>
    </div>
  );
}
