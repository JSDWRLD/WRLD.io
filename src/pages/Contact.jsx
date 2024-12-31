import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import N from "../models/N";
import { Canvas } from "@react-three/fiber";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import BlackSkybox from "../models/BlackSkybox";

import { EffectComposer, Bloom } from '@react-three/postprocessing';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => {}; // Called on click
  const handleBlur = () => {}; // Called on click out
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "John Dong",
          from_email: form.email,
          to_email: "jsdwrld@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({ show: true, text: 'Message sent successfully!', type: 'success'})

          setTimeout(() => {
            hideAlert(); // Call the hideAlert function after 3 seconds
          }, 3000); // 3000 milliseconds = 3 seconds    
          
          setTimeout(() => {
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
      })
      .catch((error) => {
        setLoading(false);
          console.error(error);
          showAlert({ show: true, text: 'Problem sending message.', type: 'danger' })
      })
  }

  return (
    <section 
      className='relative flex lg:flex-row flex-col max-container' 
      style={{ backgroundColor: 'black', color: 'white' }}
    >
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form
          ref={formRef}
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
          style={{ backgroundColor: 'transparent' }}
        >
          <label className='text-white font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John Dong'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{ backgroundColor: 'black', color: 'white' }}
            />
          </label>
          <label className='text-white font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='Jsdwrld@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{ backgroundColor: 'black', color: 'white' }}
            />
          </label>
          <label className='text-white font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{ backgroundColor: 'black', color: 'white' }}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]' style={{ backgroundColor: 'transparent' }}>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
          gl={{ preserveDrawingBuffer: true, antialias: true }}
          style={{ background: 'black' }} // This keeps the canvas background black if needed
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Suspense>
            <N />
            <EffectComposer>
              <Bloom 
                luminanceThreshold={0.7} // Adjust to target brighter areas
                luminanceSmoothing={0.06}  // Adjust for desired bloom softness
              />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact