export default function Form() {
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<h1 className="text-center font-bold text-3xl mb-12">Contact Us</h1>

			<form className="w-full max-w-[80%] mx-auto bg-slate-200 flex flex-col justify-center items-center p-12">
				<input
					className="w-full mb-2 p-1"
					type="text"
					placeholder="Your Username"
				/>

				<input
					className="w-full my-2 p-1"
					type="text"
					placeholder="Your Name"
				/>

				<input
					className="w-full my-2 p-1"
					type="email"
					placeholder="Your Email"
				/>

				<input
					className="w-full my-2 p-1"
					type="text"
					placeholder="Your message..."
				/>

				<button
					type="submit"
					className="w-[50%] bg-black text-white rounded-full px-10 py-2 hover:bg-white hover:text-black cursor-pointer mt-5">
					Send Email
				</button>
			</form>
		</div>
	);
}
