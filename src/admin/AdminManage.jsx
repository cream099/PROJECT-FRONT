import React, { useState } from 'react';
import { FaRegTrashAlt, FaTrash } from 'react-icons/fa';

const initialManage = [
  {
    id: 1,
    name: 'admin',
    email: 'admin@gmail.com',
    username: 'admin',
    status: 'ใช้งาน',
  },
  {
    id: 2,
    name: 'user',
    email: 'user@gmail.com',
    username: 'user',
    status: 'ใช้งาน',
  },
];

function AdminManage() {
  const [manage, setManage] = useState(initialManage);

  const handleDeleteUser = (userId) => {
    // กรอกโค้ดที่จำเป็นสำหรับการลบผู้ใช้จาก state หรือแหล่งข้อมูล
    console.log(`ลบผู้ใช้รหัส: ${userId}`);

    // (ตัวอย่าง) สร้างรายการใหม่ที่ไม่มีผู้ใช้ที่ต้องการลบ
    const updatedManage = manage.filter((user) => user.id !== userId);

    // อัปเดต state เพื่อทำให้ UI ทำการ render ใหม่
    setManage(updatedManage);
  };

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
              สถานะ
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              ลบชื่อผู้ใช้
              <span className="sr-only">ลบ</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {manage.map((user) => (
            <tr key={user.id} className="bg-white">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {user.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.username}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.status}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
              <button onClick={() => handleDeleteUser(user.id)} className="text-orange-400 rounded-[8px] hover:underline w-10 h-7">
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

export default AdminManage;
