export default function AboutPage() {
  return (
    <div>
      <div className="bg-gray-50 flex-col flex items-center sm:flex-row gap-6 justify-center mt-10 mb-48">
        {" "}
        <div className="flex flex-col gap-4 w-6/12 sm:w-4/12">
          <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
          <p>
            I'm a passionate developer with a love for creating innovative web
            solutions that make a real difference. With 1+ years of experience
            in full-stack/Front-end development, I specialize in turning complex
            problems into elegant, user-friendly applications.
          </p>
          <p>
            My approach combines technical expertise with creative
            problem-solving, always aiming to deliver high-quality, scalable
            solutions.
          </p>
        </div>
        <div className="shadow-md rounded-lg p-8 w-7/12 sm:w-4/12 bg-white">
          <h2 className="text-xl mb-8 bg-white">Personal Details</h2>

          <div className="space-y-4 bg-white ">
            <div className="flex justify-between border-b pb-2 bg-white">
              {" "}
              <span className="font-medium text-gray-600 bg-white">
                Location
              </span>
              <span className="text-gray-800 bg-white">
                Stockholm, Järfälla
              </span>
            </div>
            <div className="flex justify-between border-b pb-2 bg-white">
              {" "}
              <span className="font-medium text-gray-600 bg-white">Email</span>
              <span className="text-gray-800 bg-white">
                Joel.kilic@icloud.com
              </span>
            </div>
            <div className="flex justify-between border-b pb-2 bg-white">
              {" "}
              <span className="font-medium text-gray-600 bg-white">Phone</span>
              <span className="text-gray-800 bg-white">072 329 63 33</span>
            </div>
            <div className="flex justify-between border-b pb-2 bg-white">
              {" "}
              <span className="font-medium text-gray-600 bg-white">Degree</span>
              <span className="text-gray-800 bg-white">Barn & fritid</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
