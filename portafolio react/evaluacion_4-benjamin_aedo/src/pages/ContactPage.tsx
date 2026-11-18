import { useState } from "react";
import type { FormEvent } from "react";
import type { ContactFormData } from "../types";
import StatusMessage from "../components/StatusMessage/StatusMessage";
import "./ContactPage.css";

function ContactPage() {
  const [form, setForm] = useState<ContactFormData>({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <main className="contact-page">
      <section className="contact-page__section">
        <p className="contact-page__eyebrow">Hablemos</p>
        <h1 className="contact-page__title">Contacto</h1>
        <p className="contact-page__description">Si deseas conversar sobre algún proyecto o colaboración, puedes escribirme.</p>
        <form className="contact-page__form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Nombre</label>
          <input id="contact-name" type="text" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required minLength={2} autoComplete="name" />
          <label htmlFor="contact-email">Correo electrónico</label>
          <input id="contact-email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required autoComplete="email" />
          <label htmlFor="contact-message">Mensaje</label>
          <textarea id="contact-message" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} required minLength={10} rows={5} />
          <button type="submit">Enviar mensaje</button>
          {success && <StatusMessage type="success" message="¡Mensaje enviado con éxito! Gracias por contactarme." />}
        </form>
      </section>
    </main>
  );
}

export default ContactPage;
