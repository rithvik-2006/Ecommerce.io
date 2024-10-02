"use client"

import { useState } from 'react'
import { Moon, Sun, ShoppingCart, Search, User, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-zinc-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${isDarkMode ? 'bg-zinc-900/80' : 'bg-gray-100/80'} backdrop-blur-md`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold">LuxeStore</a>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className={`hover:text-blue-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Home</a>
            <a href="#" className={`hover:text-blue-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Products</a>
            <a href="#" className={`hover:text-blue-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>About</a>
            <a href="#" className={`hover:text-blue-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className={`p-2 rounded-full hover:bg-gray-700 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>
              <Search size={20} />
            </button>
            <button className={`p-2 rounded-full hover:bg-gray-700 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>
              <ShoppingCart size={20} />
            </button>
            <button className={`p-2 rounded-full hover:bg-gray-700 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>
              <User size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src="/placeholder.svg?height=800&width=1200"
          alt="Luxury Product"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Luxury</h1>
            <p className="text-xl mb-8">Elevate your lifestyle with our premium collection</p>
            <Button
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-all 
              ${isDarkMode 
                ? 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                : 'bg-gray-900 hover:bg-gray-800 text-white hover:shadow-[0_0_15px_rgba(17,24,39,0.5)]'}`}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={`py-16 ${isDarkMode ? 'bg-zinc-900' : 'bg-gray-200'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className={`group rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${isDarkMode ? 'bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer'  : 'bg-white hover:bg-gray-50'}`}>
                <img
                  src={`/placeholder.svg?height=300&width=400&text=Product ${item}`}
                  alt={`Product ${item}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Luxury Item {item}</h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>High-end product description</p>
                  <div className="flex justify-between items-center">
                    <span className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>$999</span>
                    <Button
                      className={`px-4 py-2 rounded-full transition-all 
                      ${isDarkMode 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white hover:shadow-[0_0_10px_rgba(17,24,39,0.5)]'}`}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${isDarkMode ? 'bg-zinc-900' : 'bg-gray-200'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">LuxeStore</h3>
              <p className={isDarkMode ? 'text-gray-200' : 'text-gray-900'}>Elevating your lifestyle with premium products.</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className={isDarkMode ? 'text-gray-200' : 'text-gray-900'}>
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className={isDarkMode ? 'text-gray-200' : 'text-zinc-900'}>
                1234 Luxury Lane<br />
                Opulence City, OC 56789<br />
                Phone: (555) 123-4567<br />
                Email: info@luxestore.com
              </p>
            </div>
            <div className="w-full md:w-1/4">
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className={`flex-grow px-4 py-2 rounded-l-full focus:outline-none ${isDarkMode ? 'bg-zinc-800 text-white ' : 'bg-gray-300 text-gray-100 border border-zinc-800'}`}
                />
                <Button
                  type="submit"
                  className={`px-4 py-2 h-11 rounded-r-full transition-all 
                  ${isDarkMode 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-gray-900 hover:bg-gray-800 text-white'}`}
                >
                  <ChevronRight size={20} />
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-900'}>&copy; 2024 LuxeStore. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Dark/Light Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className={`fixed bottom-4 right-4 p-3 rounded-full transition-all 
        ${isDarkMode 
          ? 'bg-zinc-700 hover:bg-zinc-600 text-yellow-400' 
          : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>
  )
}