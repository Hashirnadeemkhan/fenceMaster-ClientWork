import Link from "next/link"
export function ContactBanner() {
  return (
    <div className="bg-green-600 py-4 md:w-[79%] w-[90%] rounded-lg shadow-md absolute left-1/2 -translate-x-1/2 top-[93%] md:top-[96%] lg:top-[96%]">
      <div className="px-4">
        <div className="text-center">
          <p className="text-white text-lg md:text-xl font-medium">
            Need a fencing expert in London? Call us on{" "}
            <Link href="tel:07725966021" className="font-bold hover:underline">
              +44 7869 457259
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
