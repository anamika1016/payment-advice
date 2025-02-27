import React, { useState } from "react";
import Button from "../../components/common/Button";
import { Table } from "antd";
import SearchBar from "../../components/common/SearchBar";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/common/Modal";
import DeleteContent from "../../components/modalContent/DeleteContent";
import { useSelector, useDispatch } from "react-redux";
import { deleteCar } from "../../../features/cars/carSlice";

const AllCars = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carData = useSelector((state) => state.cars.allCars);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [carToDelete, setCarToDelete] = useState(null);

  const handleOpenDeleteModal = (record) => {
    setCarToDelete(record);
    setIsDeleteModalVisible(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisible(false);
    setCarToDelete(null);
  };

  const handleDeleteCar = () => {
    if (carToDelete) {
      dispatch(deleteCar(carToDelete.key));
      handleCloseDeleteModal();
    }
  };

  const filteredData = carData.filter((car) => {
    return (
      car.carName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.carModel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.carRegNo.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const columns = [
    {
      title: "User",
      dataIndex: "carName",
      width: "25%",
    },
    {
      title: "model",
      dataIndex: "carModel",
      width: "15%",
    },
    {
      title: "Invocie No.",
      dataIndex: "carRegNo",
      width: "20%",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => {
        return (
          <div className="flex flex-row gap-5">
            <Button
              name="Edit"
              onClick={() =>
                navigate("/admin/edit-car", { state: { carData: record } })
              }
            />

            <Button
              name="Delete"
              onClick={() => handleOpenDeleteModal(record)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="w-full h-full bg-white rounded-[1rem] py-[2rem] pl-[2rem]">
        <div className="flex flex-col gap-5 w-full h-full overflow-y-auto custom-scrollbar pr-[2rem]">
          <div className="flex flex-row justify-between mb-10">
            <h5>Payments</h5>
            <Button name="Add payment" onClick={() => navigate("/admin/add-car")} />
          </div>

          <div className="flex justify-end pr-3">
            <SearchBar
              placeholder="Search payment"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Table
            bordered
            dataSource={filteredData}
            columns={columns}
            pagination={{
              pageSize: 5,
            }}
            scroll={{
              x: 400,
            }}
          />
        </div>
      </div>

      <Modal isVisible={isDeleteModalVisible} onClose={handleCloseDeleteModal}>
        <DeleteContent
          handleDelete={handleDeleteCar}
          carName={carToDelete?.carName}
        />
      </Modal>
    </>
  );
};

export default AllCars;
