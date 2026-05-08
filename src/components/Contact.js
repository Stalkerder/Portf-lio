import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Preencha os campos para preparar o contato.");
      return;
    }

    const subject = encodeURIComponent(`Contato pelo portfolio - ${form.name}`);
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    setStatus("Abrindo seu cliente de e-mail com a mensagem pronta.");
    window.location.href = `mailto:contato@marcofilho.dev?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy">
          <span className="section-kicker">Contato</span>
          <h2>Vamos falar sobre o próximo projeto.</h2>
          <p>
            Formulário 100% front-end: ele valida os campos e prepara um e-mail
            no dispositivo, sem depender de servidor.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Nome
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={updateField}
              autoComplete="name"
              placeholder="Seu nome"
            />
          </label>
          <label>
            E-mail
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              autoComplete="email"
              placeholder="seu@email.com"
            />
          </label>
          <label>
            Mensagem
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              rows="5"
              placeholder="Conte rapidamente o que você precisa."
            />
          </label>
          <button className="button button-primary" type="submit">
            Preparar e-mail
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
};
