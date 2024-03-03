import React from 'react';
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

function AdminMProduct() {
  return (
    <div>
      <p className='pl-14 font-bold'>จัดการสินค้า</p>
    <div className="overflow-x-auto p-10">
      <table className="min-w-full bg-zinc-200 rounded-[20px] divide-y divide-gray-200">
        <thead>
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              รูปภาพ
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
                <button href="#" className="text-back rounded-[8px] hover:underline bg-emerald-500 w-10 h-7 mr-2">
                  ยืนยัน
                </button>
                <Link to="/edit">
                <button className="text-back rounded-[8px] hover:underline bg-yellow-500 w-10 h-7 mr-2">
                  แก้ไข
                </button>
                </Link>
                <button href="#" className="text-back rounded-[8px] hover:underline bg-red-500 w-10 h-7 mr-2">
                  ลบ
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

export default AdminMProduct;
