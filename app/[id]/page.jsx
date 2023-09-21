import RemoveBTN from "../components/removeBTN";
import Link from "next/link";

async function getData() {
  try {
    const res = await fetch(`http://localhost:3000/api/sch`, {
      next: {
        revalidate: 0,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch datas");
    }
    return res.json();
  } catch (error) {
    console.log("ERROR", error);
  }
}

export default async function dynamicPage({ params }) {
  const jadwal = await getData(params.id);

  console.log(jadwal);

  const jadwalFilter = jadwal.sch.filter(
    (jadwalz) => jadwalz.ids === params.id
  );
  // const schFilter = schs.filter()

  return (
    <div className="flex flex-col items-center">
      <h1 className="p-10 text-xl font-bold text-center">
        INI JADWAL UNTUK IBADAH{" "}
        <span className="uppercase text-red-500">{params.id}</span>
      </h1>
      <table className=" min-w-full table-auto ">
        <thead className="text-sm font-light ">
          <tr className=" bg-red-500 lg:bg-slate-700">
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-200">Name</span>
            </th>
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-200">Tempat Ibadah</span>
            </th>
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-200">Hari Tanggal</span>
            </th>
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-200">Pelayan Firman</span>
            </th>
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-200">Liturgi</span>
            </th>
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-200">EDIT</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {jadwalFilter.map((jadwalz, index) => (
            // eslint-disable-next-line react/jsx-key
            <tr key={index}>
              <th className="text-sm font-light px-2 py-2">
                <span className="text-gray-900">{jadwalz.name}</span>
              </th>
              <th className="text-sm font-light px-2 py-2">
                <span className="text-gray-900">{jadwalz.address}</span>
              </th>
              <th className="text-sm font-light px-2 py-2">
                <span className="text-gray-900">{jadwalz.date}</span>
              </th>
              <th className="text-sm font-light px-2 py-2">
                <span className="text-gray-900">{jadwalz.leader}</span>
              </th>
              <th className="text-sm font-light px-2 py-2">
                <span className="text-gray-900">{jadwalz.liturgy}</span>
              </th>
              <th className="text-sm font-light px-2 py-2">
                <span className="text-gray-900">
                  <RemoveBTN id={jadwalz._id} />
                </span>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
