import axios from "axios";
import { useState, useEffect } from "react";

export default function Modal(props) {
  const { el, closeModal, setTrigger } = props;
  const [input, setInput] = useState({
    name: "",
    detail: "",
    price: "",
    stock: "",
  });
  const [status, setStatus] = useState([]);
  
  useEffect(() => {
    if (status.length) { return }
    const run = async () => {
      const token = localStorage.getItem('token');
      const rs = await axios.get('http://localhost:8000/product/all-status', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStatus(rs.data.status);
    };
    run();
  }, []);

  useEffect(() => {
    setInput({
      name: el?.name ?? "",
      detail: el?.detail ?? "",
      price: el?.price ?? "",
      stock: el?.stock ?? "",
    });
  }, [el?.id]);

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const token = localStorage.getItem("token");
      const rs = await axios.put(`http://localhost:8000/product/${el.id}`, input, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(rs);
      setTrigger(prev => !prev);
      closeModal();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <form className="flex flex-col border rounded w-5/6 mx-auto p-4 gap-4" onSubmit={hdlSubmit}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="name"
              value={input.name}
              onChange={hdlChange}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Detail</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="detail"
              value={input.detail}
              onChange={hdlChange}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="price"
              value={input.price}
              onChange={hdlChange}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Stock</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="stock"
              value={input.stock}
              onChange={hdlChange}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Unit</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="unit"
              value={input.unit}
              onChange={hdlChange}
            />
          </label>
          <select className="select select-bordered w-full" name="status" value={input.status} onChange={hdlChange}>
            {status.map((el) => (
              <option key={el} value={el}>{el}</option>
            ))}
          </select>
          <div className="flex gap-2">
            <button type="submit" className="btn btn-info">Submit</button>
            <button type="button" className="btn btn-info" onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}