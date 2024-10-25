import Link from 'next/link';

export default function FirstSection() {
  return (
    <div className="relative h-full pt-72 bg-cover bg-center bg-[url('/images/background.jpg')]">
      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-end text-white">
        <h1 className="text-7xl font-bold mb-4">Primary School</h1>
        <p className="text-xl max-w-xl mx-auto mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.
        </p>
      </div>
    </div>
  );
}
