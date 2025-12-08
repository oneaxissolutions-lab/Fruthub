import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name:"", email:"", phone:"", country:"",
    message:""
  });

  const update = (e)=> setForm({...form, [e.target.name]: e.target.value});
  const submit = ()=> alert("Form Submitted ✔ (Connect backend later)");

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold">Contact / Get Quote</h2>

      <form className="bg-white shadow p-6 rounded mt-6 space-y-4"
        onSubmit={(e)=>{e.preventDefault(); submit();}}>

        <Input label="Name" name="name" value={form.name} onChange={update}/>
        <Input label="Email" name="email" value={form.email} onChange={update}/>
        <Input label="WhatsApp Number" name="phone" value={form.phone} onChange={update}/>

        <Input label="Country" name="country" value={form.country} onChange={update}/>
        
        <div>
          <label>Message</label>
          <textarea name="message" value={form.message}
            onChange={update} className="block w-full border rounded p-2 h-24"/>
        </div>

        <button className="bg-green-600 text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </form>
    </section>
  );
}

function Input({ label, name, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input className="block w-full border p-2 rounded"
        name={name} value={value} onChange={onChange}/>
    </div>
  );
}
