
export default function FirstSection() {
  return (
    <div className="relative h-full pt-48 bg-cover bg-center bg-[url('/images/background.jpg')]">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col h-full items-end text-white pr-72"> 
        <p className="text-lg text-orange-400 font-semibold">
          WELCOME ON OUR SITE
        </p>
        <h1 className="text-7xl font-bold mb-4">RSS School</h1>
        <p className="text-xl max-w-xl text-end py-6 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.
        </p>
        <button className="bg-red-500 px-16 py-4 text-white font-semibold">
          Learn More
        </button>
        <div className="flex flex-wrap justify-center gap-4 py-24">
      <button className="bg-red-500 px-32 py-6 text-white font-semibold">
        Our Teachers
        </button>
        <button className="bg-yellow-500 px-32 py-6 text-white font-semibold">
          All Classses
        </button>
        <button className="bg-white px-32 py-6 text-black font-semibold">
         Contuct Us
        </button>
      </div>
      </div>
     
    </div>
  );
}
