function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex items-center space-x-5">
        <button className="px-3 py-1 font-semibold text-lg bg-blue-700 rounded text-white">Increment</button>
        <h1 className="font-bold text-4xl">0</h1>
        <button className="px-3 py-1 font-semibold text-lg bg-red-700 rounded text-white">Decrement</button>
      </div>
    </div>
  );
}

export default App;
