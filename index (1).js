export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4">
      <header className="text-center mb-10">
        <img src="/logo.png" alt="Entrega.food Logo" className="w-40 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">Entrega.food</h1>
        <p className="text-lg text-gray-600">Delivering fresh food fast and reliably across your city.</p>
      </header>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <a href="#" className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">Order Now</a>
        <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">Partner With Us</a>
        <a href="#" className="px-6 py-3 bg-yellow-500 text-white rounded-xl shadow hover:bg-yellow-600 transition">Become a Driver</a>
      </div>

      <footer className="text-sm text-gray-500">
        Follow us on
        <span className="ml-2">
          <a href="https://instagram.com" className="underline hover:text-pink-600">Instagram</a> | 
          <a href="https://facebook.com" className="underline hover:text-blue-600 ml-1">Facebook</a> | 
          <a href="https://wa.me/1234567890" className="underline hover:text-green-600 ml-1">WhatsApp</a>
        </span>
      </footer>
    </div>
  );
}
