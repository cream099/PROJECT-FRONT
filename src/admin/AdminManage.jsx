import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function AdminManage() {
  const [users, setUsers] = useState([
  ]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let token = localStorage.getItem("token");
        const response = await axios.get('http://localhost:8000/todos/all', {
          headers: { Authorization: `Bearer ${token}` },

        });
        setUsers(response.data.users);
      } catch (error) {
        console.error(' error users:', error);
      }
    };

    fetchUsers();
  }, []);  

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
              ชื่อผู้ใช้
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              อีเมล
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              รหัสผ่าน
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ผู้ใช้งาน
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              ลบชื่อผู้ใช้
              <span className="sr-only">ลบ</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id} className="bg-white">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {user.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.username}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email ? user.email : 'No email provided'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.password}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
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
