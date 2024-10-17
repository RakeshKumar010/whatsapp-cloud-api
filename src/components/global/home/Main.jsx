import React from "react";

const Main = () => {
  return (
    <div className="md:m-10 m-3">
        <h1 className="text-center text-3xl my-5 font-bold uppercase"><span className="text-amber-500">Whatsapp</span> Cloud API</h1>
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-5 ">
      {/* simple static  */}
      <form action="" className="bg-gray-900 gap-5  flex flex-col justify-center text-white p-5 rounded-md">
        <h2 className="text-lg font-semibold text-center">Simple static</h2>
        <input type="text" placeholder="Whatsapp Number" className="py-2 w-full rounded-md p-1"/>
        <select className="rounded-md text-black py-2 w-full p-1">
          <option>Hello World</option>
          <option>Trans First</option>
        </select>
        <button className="text-white bg-amber-500 px-3 py-1 m-5 mx-auto rounded-md ">Send</button>
      </form>
      {/* Dynamic variable  */}
      <form action="" className="bg-gray-900 gap-5  flex flex-col justify-center text-white p-5 rounded-md">
        <h2 className="text-lg font-semibold text-center">Dynamic Variable</h2>
        <input type="text" placeholder="Whatsapp Number" className="py-2 w-full rounded-md p-1"/>
        <input type="text" placeholder="Name" className="py-2 w-full rounded-md p-1"/>
        <input type="text" placeholder="Order ID" className="py-2 w-full rounded-md p-1"/>
        
        <button className="text-white bg-amber-500 px-3 py-1 m-5 mx-auto rounded-md ">Send</button>
      </form>
      {/*Dynamic variable and URL Endpoint*/}
      <form action="" className="bg-gray-900 gap-5  flex flex-col justify-center text-white p-5 rounded-md">
        <h2 className="text-lg font-semibold text-center">Dynamic Variable and URL EndPoint</h2>
        <input type="text" placeholder="Whatsapp Number" className="py-2 w-full rounded-md p-1"/>
        <input type="text" placeholder="Name" className="py-2 w-full rounded-md p-1"/>
        <input type="text" placeholder="Order ID" className="py-2 w-full rounded-md p-1"/>
        <input type="text" placeholder="End Url" className="py-2 w-full rounded-md p-1"/>
        
        <button className="text-white bg-amber-500 px-3 py-1 m-5 mx-auto rounded-md ">Send</button>
      </form>
      {/*File Upload*/}
      <form action="" className="bg-gray-900 gap-5  flex flex-col justify-center text-white p-5 rounded-md">
        <h2 className="text-lg font-semibold text-center">File Upload</h2>
        <input type="text" placeholder="Whatsapp Number" className="py-2 w-full rounded-md p-1"/>
        <select className="rounded-md text-black py-2 w-full p-1">
          <option>Image</option>
          <option>Pdf</option>
        </select>
        <input type="text" placeholder="Name" className="py-2 w-full rounded-md p-1"/>
        
        <input type="text" placeholder="Url" className="py-2 w-full rounded-md p-1"/>
        
        <button className="text-white bg-amber-500 px-3 py-1 m-5 mx-auto rounded-md ">Send</button>
      </form>
    </div>
    </div>
  );
};

export default Main;
