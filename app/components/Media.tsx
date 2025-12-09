export default function Media() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-16 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((num) => (
            <div 
              key={num} 
              className="aspect-video bg-white border border-border rounded-lg flex items-center justify-center"
            >
              <span className="text-slate-500 text-xl font-medium">Image {num}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
