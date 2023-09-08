export default function dynamicPage({ params }) {
  return (
    <div className="flex flex-col items-center">
      <h1>
        INI JADWAL UNTUK IBADAH <span className="uppercase">{params.id}</span>
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
          </tr>
          <tr className="">
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-900">Kel.Latuni</span>
            </th>
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-900">Bobara 3</span>
            </th>
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-900">Senin,20 July 2023</span>
            </th>
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-900">Sym.Rika Sapulette</span>
            </th>
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-900">Liturgi</span>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
