export default function SolutionHE() {
  const features = [
    {
      title: 'מכונות IoT חכמות',
    },
    {
      title: 'מיקום אסטרטגי במרחב הציבורי',
    },
    {
      title: 'חווית משתמש מכבדת ודיסקרטית',
    },
    {
      title: 'מערכת ניהול מלאה',
    },
  ]

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-16 text-center">
          הפתרון שלנו
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <p className="text-lg text-slate-500">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
