"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function FormInput() {
  const options = [
    { value: "", text: "--CHOOSE AN OPTION--" },
    { value: "pkb", text: "PKB" },
    { value: "pw", text: "PW" },
    { value: "keluarga", text: "KELUARGA" },
    { value: "pam", text: "PAM" },
  ];

  const router = useRouter();

  const [optSelect, setoptSelected] = useState(options[0].value);
  const [ids, setIds] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [leader, setLeader] = useState("");
  const [liturgy, setLiturgy] = useState("");
  const [date, setDate] = useState("");

  const handleInput = async (event) => {
    event.preventDefault();

    setoptSelected(event.target.value);
    if (!optSelect) {
      alert("Fill The Form Please!!!");
    }

    if (
      !ids ||
      !name ||
      !address ||
      !leader ||
      !liturgy||
      !date
    ) {
      alert("Harap isi semua formulir terlebih dahulu.");
    }

    try {
      // const formattedDate = newDate.toISOString().split("T")[0];
      const res = await fetch("http://localhost:3000/api/sch", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          ids,
          address,
          leader,
          liturgy,
          date,
        }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("failed to create database");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex space-y-10 flex-col bg-slate-600 p-10 rounded-lg">
      <h1 className="flex justify-center text-xl font-bold mb-4">
        FORM INPUT DATA
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
            value={ids}
            onChange={(e) => setIds(e.target.value)}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>

          <label htmlFor="data">Nama</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="p-2"
            type="text"
            id="data"
            name="data"
            placeholder="Masukkan Data"
          />
          <label htmlFor="data">Alamat:</label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            className="p-2"
            type="text"
            id="alamat"
            name="alamat"
            placeholder="Alamat"
          />
          <label htmlFor="data">Pelayan Firman:</label>
          <input
            onChange={(e) => setLeader(e.target.value)}
            value={leader}
            className="p-2"
            type="text"
            id="leader"
            name="leader"
            placeholder="Pelayan Firman"
          />

          <label htmlFor="data">Liturgi:</label>
          <input
            onChange={(e) => setLiturgy(e.target.value)}
            value={liturgy}
            className="p-2"
            type="text"
            id="liturgi"
            name="liturgi"
            placeholder="Liturgi"
          />

          <label htmlFor="data">Hari Tanggal:</label>
          <input
            onChange={(e) => setDate(e.target.value)}
            value={date}
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
