

const Bulb = () => {
  return (
    <div>
     <div
    className="w-full h-full bg-gradient-to-tl via-sky-700/50 from-sky-700/30 to-white dark:bg-gradient-to-tr dark:from-black dark:to-gray-600">

   
    
    <div
        className="hidden dark:block w-[10rem] h-[10rem] rounded-full shadow-2xl shadow-white  place-items-center absolute right-2 top-2  cursor-pointer [transition:all_400ms_ease] hover:shadow-2xl hover:shadow-gray-900 hover:-translate-y-[1rem]">

        <div
            className="w-[6rem] h-[6rem] absolute bg-gradient-to-r from-black to-gray-900 blur-lg rounded-full animate-[spinIn_10s_linear_infinite]">
        </div>
        <div
            className="w-[7rem] h-[7rem] absolute bg-gradient-to-tr via-gray-900 from-black to-gray-900 blur-lg z-30 rounded-full">
        </div>
        <div
            className="w-[8rem] h-[8rem] absolute bg-gradient-to-tl via-black/90 from-white to-gray-100 z-20 blur-sm rounded-full">
        </div>
        <div
            className="w-[9rem] h-[9rem] absolute bg-gradient-to-tr via-gray-100 from-gray-50 to-white z-10 blur-lg rounded-full animate-[spinIn_80s_linear_infinite]">
        </div>
        <p
            className="bg-gradient-to-r from-white to-white shadow-2xl shadow-white brightness-200 contrast-200 rounded-full w-[10rem] h-[10rem]">

        <div className="absolute -rotate-[360deg] text-white text-sm font-serif font-semibold"></div>
        </p>
    </div>
</div> 
    </div>
  )
}

export default Bulb
