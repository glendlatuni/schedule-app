"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function EditJdwl({
  id,
  name,
  ids,
  address,
  leader,
  liturgy,
  date,
}) {
  const options = [
    { value: "", text: "--CHOOSE AN OPTION--" },
    { value: "pkb", text: "PKB" },
    { value: "pw", text: "PW" },
    { value: "keluarga", text: "KELUARGA" },
    { value: "pam", text: "PAM" },
  ];

  const router = useRouter();

  const [optSelect, setNewoptSelected] = useState(options[0].value);
  const [newIds, setNewIds] = useState(ids);
  const [newName, setNewName] = useState(name);
  const [newAddress, setNewAddress] = useState(address);
  const [NewLeader, setNewLeader] = useState(leader);
  const [NewLiturgy, setNewLiturgy] = useState(liturgy);
  const [NewDate, setNewDate] = useState(date);

  const handleInput = async (event) => {
    event.preventDefault();

    setNewoptSelected(event.target.value);
    if (
      !newIds ||
      !newName ||
      !NewLeader ||
      !NewLiturgy ||
      !NewDate ||
      !newAddress
    ) {
      alert("Fill The Form Please!!!");
    }

    try {
      // const formattedDate = newDate.toISOString().split("T")[0];
      const res = await fetch(`http://localhost:3000/api/sch/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newName,
          newIds,
          newAddress,
          NewLeader,
          NewLiturgy,
          NewDate,
        }),
      });
      if (res.ok) {
        router.push("/keluarga");
      } else {
        throw new Error("failed to create database");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex space-y-10 flex-col bg-red-300 p-10 rounded-lg">
      <h1 className="flex justify-center text-xl font-bold mb-4">
        FORM EDIT DATA
      </h1>
      <div className="border-black">
        <form
          onSubmit={handleInput}
          className="flex flex-col font-bold text-lg"
          action="">
          <label htmlFor="jenis">Pilih Jenis:</label>
          <select
            className="p-2 w-fit"
            name="jenis"
            id="jenis"
            value={newIds}
            onChange={(e) => setNewIds(e.target.value)}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>

          <label htmlFor="data">Nama</label>
          <input
            onChange={(e) => setNewName(e.target.value)}
            value={newName}
            className="p-2"
            type="text"
            id="data"
            name="data"
            placeholder="Masukkan Data"
          />
          <label htmlFor="data">Alamat:</label>
          <input
            onChange={(e) => setNewAddress(e.target.value)}
            value={newAddress}
            className="p-2"
            type="text"
            id="alamat"
            name="alamat"
            placeholder="Alamat"
          />
          <label htmlFor="data">Pelayan Firman:</label>
          <input
            onChange={(e) => setNewLeader(e.target.value)}
            value={NewLeader}
            className="p-2"
            type="text"
            id="leader"
            name="leader"
            placeholder="Pelayan Firman"
          />

          <label htmlFor="data">Liturgi:</label>
          <input
            onChange={(e) => setNewLiturgy(e.target.value)}
            value={NewLiturgy}
            className="p-2"
            type="text"
            id="liturgi"
            name="liturgi"
            placeholder="Liturgi"
          />

          <label htmlFor="data">Hari Tanggal:</label>
          <input
            onChange={(e) => setNewDate(e.target.value)}
            value={NewDate}
            className="p-2"
            type="date"
            id="tanggal"
            name="tanggal"
            min="2023-01-01"
          />

          <button className=" bg-green-400 my-4 py-3 w-1/2 rounded-4xl">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
