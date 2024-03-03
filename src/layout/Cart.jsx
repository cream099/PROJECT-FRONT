import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AddressSection = () => (
  <div className="w-[600px] h-24 border p-4 text-[12px] text-gray-700 mt-5 absolute top-0 right-6">ที่อยู่จัดส่ง</div>
);

const PaymentMethodSection = () => (
  <div className="w-[600px] border p-4 text-[12px] text-gray-700 mt-32 absolute top-0 right-6">วิธีการชำระเงิน</div>
);

const SummarySection = ({ product }) => (
  <div className='w-[600px] h-auto border p-4 text-[12px] text-gray-700 mt-48 absolute top-0 right-6'>
    <p>สรุปคำสั้งซื้อ</p>
    <p className='pt-10'>คำสั่งซื้อทั้งหมด</p>
    <div className="flex-1 flex-col">
      <div className="flex justify-between">
        <h6 className="mt-4 text-[14px] text-gray-700">การจัดส่ง</h6>
        <p className="mt-1 text-lg font-medium text-orange-400">30$</p>
      </div>
      <Link to="/order"><button type="submit" className="w-full mt-4 text-sm bg-stone-700 text-white py-2 px-4 hover:bg-stone-500 transition duration-300">ชำระเงิน</button></Link>
    </div>
  </div>
);

const Cart = () => {
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
    },
    {
      id: 2,
      name: 'ลายสวยวินเทจสุดๆ ผ้าบางแต่ไม่โป๊นะคะ Size• รอบอก 38 นิ้ว• ยาว 27 นิ้ว',
      href: '#',
      price: '$180',
      imageSrc: '/src/assets/bb.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
  ];

  return (
    <div className="flex">
      <div className="p-5 border w-2/3 min-w-[1400px] mx-auto h-full mt-16 bg-white border-white relative">
        {carts.map((product) => (
          <div key={product.id} className="w-1/2 border mb-4 p-4 flex items-center">
            <input
              type="checkbox"
              checked={selectedCarts.includes(product.id)}
              onChange={() => toggleSelection(product)}
              className="mr-4 cursor-pointer flex-shrink-0"
            />
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
        <AddressSection />
        <PaymentMethodSection />
        <SummarySection product={carts[0]} />
      </div>
    </div>
  );
};

export default Cart;
