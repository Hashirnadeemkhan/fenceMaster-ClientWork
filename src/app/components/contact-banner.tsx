export function ContactBanner() {
  return (
    <div className="bg-green-600 py-4 md:w-[79%] w-[90%] rounded-lg shadow-md absolute left-1/2 -translate-x-1/2 top-[93%] md:top-[96%] lg:top-[96%]">
      <div className="px-4">
        <div className="text-center">
          <p className="text-white text-lg md:text-xl font-medium">
            Need a fencing expert in the West Midlands? Call us on{" "}
            <a href="tel:07725966021" className="font-bold hover:underline">
              07725 966 021
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
