import React from 'react'

const AddProduct = () => {
  return (
    <div>
      <p className="pl-14 font-bold">เพิ่มสินค้า</p>
      <div className="grid grid-cols-3 gap-4 p-10">
        <div className="relative">
          <label
            htmlFor="productName"
            className="text-sm text-gray-600 block mb-1"
          ></label>
          <input
            type="text"
            id="productName"
            className="block w-full py-2 px-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="ชื่อสินค้า"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="price"
            className="text-sm text-gray-600 block mb-1"
          ></label>
          <input
            type="text"
            id="price"
            className="block w-full py-2 px-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="ราคา"
          />
        </div>
      </div>

      <div className="flex w-full items-center justify-center">
        <label
          htmlFor="dropzone-file"
          className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              อัพโหลดรูปภาพ
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG</p>
          </div>
          <input type="file" id="dropzone-file" className="hidden" />
        </label>
      </div>
      <div className='mt-8 flex items-center justify-center'>
      <button
        href="#"
        className="text-white rounded-[8px] hover:underline bg-stone-700 w-20 h-10 mr-2"
      >
        ยืนยัน
      </button>
    </div>
    </div>
  )
}

export default AddProduct