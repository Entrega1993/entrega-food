export default function Order() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 px-6 text-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">Order Your Meal</h1>
        <p className="text-lg mb-6">Delivery from your favorite local restaurants is just a click away.</p>
        <a href="mailto:info@entrega.food" className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700">Start Order</a>
      </div>
    </div>
  );
}
