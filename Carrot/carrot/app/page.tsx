
export default function Home() {
  return (
   <main className="bg-gray-300 h-screen flex items-center justify-center p-5"> 
      <div>
      <div className="bg-white w-full shadow-lg p-5 rounded-2xl">
        <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-gray-600 font-semibold -mb-1"> In Transit</span>
          <span className="text-4xl font-bold"> Coolblue</span>
        </div>
        <div className="size-12 rounded-full bg-amber-500"></div> 
        </div>
        <div className="my-2 flex items-center gap-2">
          <span className="bg-green-400 text-white uppercase px-2.5 py-1.5 text-xs rounded-2xl font-medium">Today</span>
          <span>9:30-10:30</span>
        </div>
        <div className="relative">
          <div className="bg-gray-200 absoltue rounded-full w-full h-2"/>
          <div className="bg-green-400 absolute rounded-full w-2/4 h-2"/>
        </div>
        <div>  
          <span>Expected</span>
          <span>Sorting Center</span>
          <span>In transit</span>
          <span>Delivered</span>
        </div>
      </div>
      </div>
    </main>
   
  );
}
 