import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles/';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';

// Import react-toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);

	//! Hardcoded EmailJS Credentials
	const serviceID = "service_35nbynb";
	const templateID = "template_xm8xyp4";
	const publicKey = "8x9gNP8D0cmYMH9KO";
	const toName = "Muhammad Umar";
	const toEmail = "ramzan87767@gmail.com";

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (form.name && form.email && form.message) {
			setLoading(true);

			emailjs.send(
				serviceID,
				templateID,
				{
					from_name: form.name,
					to_name: toName,
					from_email: form.email,
					to_email: toEmail,
					message: form.message,
				},
				publicKey
			)
			.then(() => {
				setLoading(false);
				// Show success notification
				toast.success(`Thank you, ${form.name}! Your message has been sent successfully.`);
				setForm({ name: '', email: '', message: '' });
			})
			.catch((error) => {
				setLoading(false);
				console.error("❌ Email Send Error:", error);
				// Show error notification
				toast.error("❌ Oops! Something went wrong. Please try again.");
			});
		} else {
			// Show warning notification
			toast.warn("⚠️ Please fill all the fields before submitting.");
		}
	};

	return (
		<>
			{/*Toast Notification Container */}
			<ToastContainer
	position="top-right"
	autoClose={5000}
	hideProgressBar={false}
	closeOnClick
	pauseOnHover
	draggable
	toastStyle={{ zIndex: 9999 }} 
	style={{
		zIndex: 9999, 
		position: "fixed", 
		top: "65px", 
		right: "10px",
	}}
/>


			<div className='xl:mt-12 lg:flex-row flex-col-reverse flex justify-center items-center gap-8 overflow-hidden'>
				<motion.div
					variants={slideIn('left', 'tween', 0.2, 1)}
					className='lg:w-2/5 bg-transparent rounded-2xl p-[1px] w-full'
				>
					<p className={styles.sectionSubText}>Get in touch</p>
					<h3 className={styles.sectionHeadText}>Contact.</h3>

					<form ref={formRef} onSubmit={handleSubmit} className='mt-10 flex flex-col gap-8'>
						<label className='flex flex-col'>
							<span className='text-white font-medium m-auto w-full max-w-inputWidth mb-4'>
								Your name
							</span>
							<input
								type='text'
								name='name'
								autoComplete='off'
								required
								value={form.name}
								onChange={handleChange}
								placeholder="What's your name?"
								className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white font-normal rounded-lg border-none w-full max-w-inputWidth m-auto'
							/>
						</label>

						<label className='flex flex-col'>
							<span className='text-white font-medium m-auto w-full max-w-inputWidth mb-4'>
								Your email
							</span>
							<input
								type='email'
								name='email'
								autoComplete='off'
								required
								value={form.email}
								onChange={handleChange}
								placeholder="What's your email?"
								className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white font-normal rounded-lg border-none w-full max-w-inputWidth m-auto'
							/>
						</label>

						<label className='flex flex-col'>
							<span className='text-white font-medium m-auto w-full max-w-inputWidth mb-4'>
								Your message
							</span>
							<textarea
								rows='7'
								name='message'
								autoComplete='off'
								required
								value={form.message}
								onChange={handleChange}
								placeholder='What do you want to say?'
								className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white font-normal resize-none rounded-lg border-none w-full max-w-inputWidth m-auto'
							/>
						</label>

						<button
							type='submit'
							className={loading
								? `py-3 px-8 bg-tertiary w-fit text-secondary font-medium rounded-xl pointer-events-none`
								: `py-3 px-8 bg-tertiary w-fit text-white font-medium rounded-xl`
							}
						>
							{loading ? 'Sending...' : 'Send'}
						</button>
					</form>
				</motion.div>

				<motion.div
					variants={slideIn('right', 'tween', 0.2, 1)}
					className='lg:w-3/5 xl:h-[560px] lg:h-[500px] md:h-[460px] sm:h-[380px] h-[280px] w-full'
				>
					<EarthCanvas />
				</motion.div>
			</div>
		</>
	);
};

export default SectionWrapper(Contact, 'contact');
