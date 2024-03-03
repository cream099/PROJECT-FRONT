import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa';

const re = [
  {
    id: 1,
    name: 'admin',
    email: 'admin@gmail.com',
    username: 'admin',
    problem: 'ซื้อไม่ได้',
  },
  {
    id: 2,
    name: 'user',
    email: 'user@gmail.com',
    username: 'user',
    problem: 'ลงสินค้าไม่ได้',
  },
];

const AdminReport = () => {
  return (
    <div>
      <p className='pl-14 font-bold'>จัดการผู้ใช้</p>
    <div className="overflow-x-auto p-10">
      <table className="min-w-full bg-zinc-200 rounded-[20px] divide-y divide-gray-200">
        <thead>
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ไอดี
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ชื่อ
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              อีเมล
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ชื่อผู้ใช้
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ปัญหา
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              ลบ
              <span className="sr-only">ลบ</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {re.map((user) => (
            <tr key={user.id} className="bg-white">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {user.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.username}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.problem}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
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
  )
}

export default AdminReport