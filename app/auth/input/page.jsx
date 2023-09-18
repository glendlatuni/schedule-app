"use client";
import { Component } from "react";

class formInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jenis: "PKB",
      dataLabel: "Masukan data BKB",
    };
  }

  handleKindChange = (e) => {
    const jenisValue = e.target.value;
    let dataLabel = "";

    if (jenisValue === "PKB") {
      dataLabel = "Masukan Data PKB";
    } else if (jenisValue === "PW") {
      dataLabel = "Masukan Data PW";
    } else if (jenisValue === "KELUARGA") {
      dataLabel = "Masukan Data KELUARGA";
    }
    this.setState({
      jenis: jenisValue,
      dataLabel: dataLabel,
    });
  };
  render() {
    return (
      <div className="flex space-y-10 flex-col bg-slate-300 p-10 rounded-lg">
        <h1 className="flex justify-center text-xl font-bold mb-4">
          FORM INPUT DATA
        </h1>
        <form className="flex flex-col font-bold text-lg" action="">
          <label htmlFor="jenis">Pilih Jenis:</label>
          <select
            className="p-2 w-1/6"
            name="jenis"
            id="jenis"
            value={this.state.jenis}
            onChange={this.handleKindChange}>
            <option value="PKB">PKB</option>
            <option value="PW">PW</option>
            <option value="KELUARGA">KELUARGA</option>
          </select>
          <label htmlFor="data">{this.state.dataLabel}:</label>
          <input
            className="p-2"
            type="text"
            id="data"
            name="data"
            placeholder={`Masukkan Data ${this.state.jenis}`}
          />
          <label htmlFor="data">Amalat:</label>
          <input
            className="p-2"
            type="text"
            id="alamat"
            name="alamat"
            placeholder="Alamat"
          />
          <label htmlFor="data">Pelayan Firman:</label>
          <input
            className="p-2"
            type="text"
            id="leader"
            name="leader"
            placeholder="Pelayan Firman"
          />

          <label htmlFor="data">Liturgi:</label>
          <input
            className="p-2"
            type="text"
            id="liturgi"
            name="liturgi"
            placeholder="Liturgi"
          />

          <label htmlFor="data">Hari Tanggal:</label>
          <input
            className="p-2"
            type="date"
            id="tanggal"
            name="tanggal"
            min="2023-01-01"


          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default formInput;