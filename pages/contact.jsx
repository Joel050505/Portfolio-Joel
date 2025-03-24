// import { useState } from "react";
// import Footer from "./components/footer";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     console.log(e.target.name, e.target.value); // Debugging: Check if the event is firing correctly
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     const response = await fetch("/api/sendEmail", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       setStatus("Email sent successfully!");
//       setFormData({ name: "", email: "", message: "" });
//     } else {
//       setStatus("Failed to send email. Try again.");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="mt-10 mb-10 flex justify-center">
//           <div className="p-6 bg-white rounded-xl shadow-md">
//             <h1 className="font-bold text-4xl bg-white text-center">
//               Contact Me
//             </h1>
//             <div className="flex flex-col bg-white gap-8 p-4">
//               <div className="flex flex-col">
//                 <label className="bg-white" htmlFor="name">
//                   Name
//                 </label>
//                 <input
//                   className="p-2 border-2 rounded-xl bg-white w-96"
//                   id="name"
//                   type="text"
//                   placeholder="Your name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label className="bg-white" htmlFor="email">
//                   Email
//                 </label>
//                 <input
//                   onChange={handleChange}
//                   className="p-2 border-2 rounded-xl bg-white w-96"
//                   id="email"
//                   type="text"
//                   placeholder="your.email@example.com"
//                   name="email"
//                   value={formData.email}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label className="bg-white" htmlFor="message">
//                   Message
//                 </label>
//                 <textarea
//                   className="p-2 border-2 rounded-xl bg-white w-96 h-40"
//                   id="message"
//                   placeholder="Your message...."
//                   name="message"
//                   onChange={handleChange}
//                   value={formData.message}
//                 ></textarea>
//               </div>
//               <div>
//                 <button
//                   type="submit"
//                   className="w-96 p-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all ease-out duration-300"
//                 >
//                   Send message
//                 </button>
//                 {status && <p>{status}</p>}
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
