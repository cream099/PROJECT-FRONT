import React from 'react';
import { FaRegTrashAlt, FaSearch, FaTrash, FaTrashAlt, FaTrashRestore } from 'react-icons/fa';
import { Link } from "react-router-dom";

const mproduct = [
  {
    id: 1,
    name: '🌷กระโปรงแฟรี่ แต่งกระดุมหน้า มีซับในสวยมากค่ะ Size• รอบอก 28-40นิ้ว• สะโพก F นิ้ว• ยาว 33 นิ้ว',
    href: '#',
    price: '$180',
    imageSrc: '/src/assets/aa.jpg',
    status: 'ลงขายสินค้าสำเร็จ',
  },
  {
    id: 3,
    name: 'ผ้าซีทรู อก ไม่เกิน40ยาว24',
    href: '#',
    price: '$150',
    imageSrc: '/src/assets/cc.jpg',
    status: 'ใช้งาน',
  },
];

function AdminPayment() {
  return (
    <div>
      <p className='pl-14 font-bold'>จัดการชำระเงิน</p>

      <div className='flex space-x-4'>
      <div className='mt-4 pl-14'>
        <div className="w-[20rem] bg-white p-6 rounded-md shadow-md flex items-center">
          <h5 className="text-base font-medium text-gray-500 dark:text-gray-400">จำนวนคำสั่งซื้อ</h5>
          <span className="text-2xl font-extrabold tracking-tight ml-20">4</span>
        </div>
      </div>

      <div className='mt-4 pl-14'>
        <div className="w-[20rem] bg-white p-6 rounded-md shadow-md flex items-center">
          <h5 className="text-base font-medium text-gray-500 dark:text-gray-400">ยอดรวมการขาย</h5>
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl font-extrabold tracking-tight ml-20">300</span>
            <span className="text-3xl font-semibold ml-2">$</span>
          </div>
        </div>
      </div>
    </div>

    <div className="overflow-x-auto p-10">
      <table className="min-w-full bg-zinc-200 rounded-[20px] divide-y divide-gray-200">
        <thead>
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ชื่อสินค้า
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ราคา
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              สถานะ
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              จัดการ
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {mproduct.map((product) => (
            <tr key={product.id} className="bg-white">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="w-20 object-cover object-center group-hover:opacity-75"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-400">{product.price}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.status}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <Link to="">
                <button href="#" className="text-gray-600 rounded-[8px] hover:underline w-10 h-7">
                  <FaSearch/>
                </button>
                </Link>
                <button className="text-orange-400 rounded-[8px] hover:underline w-10 h-7">
                  <FaRegTrashAlt/>
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default AdminPayment;
