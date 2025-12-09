export default function SolutionHE() {
  const features = [
    {
      icon: '🔧',
      title: 'מכונות IoT חכמות',
    },
    {
      icon: '📍',
      title: 'מיקום אסטרטגי במרחב הציבורי',
    },
    {
      icon: '✨',
      title: 'חווית משתמש מכבדת ודיסקרטית',
    },
    {
      icon: '📊',
      title: 'מערכת ניהול מלאה',
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          הפתרון שלנו
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <p className="text-lg text-gray-700">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
