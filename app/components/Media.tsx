export default function Media() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((num) => (
            <div 
              key={num} 
              className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center shadow-md"
            >
              <span className="text-gray-500 text-xl font-medium">Image {num}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
