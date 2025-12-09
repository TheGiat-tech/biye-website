'use client'

import { useState } from 'react'

export default function ContactHE() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('הטופס נשלח! (זהו ממשק סטטי - אין חיבור לשרת)')
  }

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-16 text-center">
          צרו קשר
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-500 mb-2">
              שם
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-500 mb-2">
              אימייל
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-500 mb-2">
              הודעה
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors"
          >
            שלח
          </button>
        </form>
      </div>
    </section>
  )
}
