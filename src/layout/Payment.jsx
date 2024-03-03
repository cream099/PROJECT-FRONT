import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AddressSection = () => (
  <div className="w-[600px] h-24 border p-4 text-[12px] text-gray-700 mt-16 absolute top-0 right-6">
    <div className="">
      <h6 className="">สถานะการจัดส่ง</h6>
      {/* เพิ่มสถานะการจัดส่งที่คุณต้องการแสดง */}
      <p className="text-orange-400 ">กำลังจัดส่ง</p>
    </div>
  </div>
);

const SummarySection = ({ product }) => (
  <div className='w-[600px] h-auto border p-4 text-[12px] text-gray-700 mt-48 absolute top-0 right-6'>
    <p>รายละเอียดคำสั่งซื้อ</p>
    <p className='pt-4'>หมายเลขคำสั่งซื้อ: <span className="font-bold">123456</span></p>
    <p className=''>วันที่สั่งซื้อ: <span className="font-bold">2024-03-02</span></p>
    <p className=''>วิธีการชำระเงิน: <span className="font-bold">Credit Card</span></p>
    <p className=''>วันที่จัดส่ง: <span className="font-bold">2024-03-05</span></p>
    <p className=''>หมายเลขการติดตาม: <span className="font-bold">TRK123456</span></p>
  </div>
);


const Payment = () => {
  const [selectedCarts, setSelectedCarts] = useState([]);

  const toggleSelection = (cart) => {
    const isSelected = selectedCarts.includes(cart.id);
    if (isSelected) {
      setSelectedCarts(selectedCarts.filter((selectedId) => selectedId !== cart.id));
    } else {
      setSelectedCarts([...selectedCarts, cart.id]);
    }
  };

  const carts = [
    {
      id: 1,
      name: '🌷กระโปรงแฟรี่ แต่งกระดุมหน้า มีซับในสวยมากค่ะ Size• รอบอก 28-40นิ้ว• สะโพก F นิ้ว• ยาว 33 นิ้ว',
      href: '#',
      price: '$180',
      imageSrc: '/src/assets/aa.jpg',
      imageAlt: '',
    },
  ];

  return (
    <div className="flex">
      <div className="p-5 border w-2/3 min-w-[1400px] mx-auto h-[550px] mt-16 bg-white border relative">
        <p className='font-bold pb-4'>จัดคำสั่งซื้อแล้ว</p>
        {carts.map((product) => (
          <div key={product.id} className="w-1/2 mb-4 p-4 flex items-center">
            <div className="w-24">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="cursor-pointer"
              />
            </div>
            <div className="ml-4 flex-1 flex-col">
              <h6 className="mt-4 text-[12px] text-gray-700">{product.name}</h6>
              <div className="card-actions flex justify-between">
                <p className="mt-1 flex lg:flex-1 text-lg font-medium text-orange-400">{product.price}</p>
              </div>

            </div>
          </div>
        ))}
        <div className="flex">
          <div className="ml-4">
            <div className="flex justify-between items-center">
              <h6 className="mt-4 text-[14px] font-bold text-gray-700">สรุปคำสั้งซื้อ</h6>
            </div>
            <div className="flex justify-between items-center">
              <h6 className="mt-4 text-[14px] text-gray-700">ยอดรวม</h6>
              <p className="mt-1 text-lg font-medium text-orange-400 pl-80">
                {carts.reduce((total, cart) => total + parseInt(cart.price.slice(1)), 0)}$
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h6 className="mt-4 text-[14px] text-gray-700">การจัดส่ง</h6>
              <p className="mt-1 text-lg font-medium text-orange-400 pl-80">30$</p>
            </div>
            <div className="flex justify-between items-center">
              <h6 className="mt-4 text-[14px] text-gray-700">รวมทั้งหมด</h6>
              <p className="mt-1 text-lg font-medium text-orange-400 pl-80">
                {carts.reduce((total, cart) => total + parseInt(cart.price.slice(1)), 0) + 30}$
              </p>
            </div>
          </div>
        </div>
        <AddressSection />
        <SummarySection product={carts[0]} />
      </div>
    </div>
  );
};

export default Payment;
