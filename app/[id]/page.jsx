async function getData(id) {
  const res = await fetch(`http://localhost:4000/jadwal/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  return res.json();
}

export default async function dynamicPage({ params }) {
  const sch = await getData(params.id);
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
              <span className="text-gray-900">{sch.Nama}</span>
            </th>
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-900">{sch.alamat}</span>
            </th>
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-900">{sch.hari_tanggal}</span>
            </th>
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-900">{sch.pelayan}</span>
            </th>
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-900">{sch.litutgi}</span>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
