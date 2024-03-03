import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";

const ProductItem = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    console.log('Clicked Add to Cart');
    // เพิ่มลงในตะกร้า
    console.log(`เพิ่ม ${selectedProduct.name} ลงในตะกร้า`);
  };

  const handleBuyNew = () => {
    // ซื้อสินค้าใหม่
    console.log(`ซื้อสินค้าใหม่: ${selectedProduct.name}`);
  };

  const products = [
    {
      id: 1,
      name: '🌷กระโปรงแฟรี่ แต่งกระดุมหน้า มีซับในสวยมากค่ะ Size• รอบอก 28-40นิ้ว• สะโพก F นิ้ว• ยาว 33 นิ้ว',
      href: '#',
      price: '$180',
      imageSrc: '/src/assets/aa.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'ลายสวยวินเทจสุดๆ ผ้าบางแต่ไม่โป๊นะคะ Size• รอบอก 38 นิ้ว• ยาว 27 นิ้ว',
      href: '#',
      price: '$180',
      imageSrc: '/src/assets/bb.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'ผ้าซีทรู อก ไม่เกิน40ยาว24',
      href: '#',
      price: '$150',
      imageSrc: '/src/assets/cc.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    }, 
    {
      id: 4,
      name: 'ลายลูกน้ำ วินเทจสุดๆ Size M• รอบอก 36 นิ้ว• ยาว 25 นิ้ว',
      href: '#',
      price: '$185',
      imageSrc: '/src/assets/dd.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: '🌷งานสวยยย มีเชือกผูกหลัง Size• รอบอก 32-34 นิ้ว• ยาว 24 นิ้ว',
      href: '#',
      price: '$155',
      imageSrc: '/src/assets/ee.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 6,
      name: '🌷เสื้อตัวนี้สวยมากก ผ้าชีฟองไม่มีซับแต่ไม่โป๊ค่ะ มีเชือกรูดใต้อกเก๋ๆ Size M• รอบอก 34-36 นิ้ว• ยาว 25 นิ้ว',
      href: '#',
      price: '$190',
      imageSrc: '/src/assets/ff.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 7,
      name: '🌷กระโปรงผ้าต่อชั้นๆสวยมากกเอวมีเชือกรูด มีซิปด้านข้างมีซับในค่ะ Size• รอบเอว Free-30 นิ้ว• สะโพก 42 นิ้ว• ยาว 29 นิ้ว',
      href: '#',
      price: '$180',
      imageSrc: '/src/assets/gg.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 8,
      name: 'ตัวนี้ผ้าบางซีทรูนะคะ ลายสวยวินเทจมากก Size• รอบอก 32-36 นิ้ว• ยาว 26.5 นิ้ว',
      href: '#',
      price: '$170',
      imageSrc: '/src/assets/hh.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">สินค้า</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <div className="card-actions">
                <p className="mt-1 flex lg:flex-1 text-lg font-medium text-orange-400">{product.price}</p>
                <button className="btn" onClick={() => showModal(product)}><FaShoppingCart /></button>
                {selectedProduct && (
                  <dialog open className="modal">
                    <div className="modal-box max-w-3xl">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
                      </form>
                      <h3 className="pb-4 font-bold text-lg"> </h3>
                      <div className="flex">
                        <img src={selectedProduct.imageSrc} alt={selectedProduct.imageAlt} />
                        <div className="ml-4 flex-1 flex-col">
                          <p>{selectedProduct.name}</p>
                          <p className="mt-1 flex lg:flex-1 text-lg font-medium text-orange-400">{selectedProduct.price}</p>
                          <div className="flex gap-5 mt-36">
                            <Link to="/cart"><button type="submit" className="w-72 text-sm bg-stone-700 text-white py-2 px-4 hover:bg-stone-500 transition duration-300" onClick={handleAddToCart}>เพิ่มเข้ารถเข็น</button></Link>
                            {/* <button type="reset" className="w-32 text-sm bg-stone-700 text-white py-2 px-4 hover:bg-stone-500 transition duration-300" onClick={handleBuyNew}>ซื้อสินค้าใหม่</button> */}
                            <button type="heart" className="w-12 text-sm bg-stone-700 text-white py-2 px-4 rounded-[15px] hover:bg-stone-500 transition duration-300"><FaHeart /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </dialog>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
