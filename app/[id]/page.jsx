export default function dynamicPage({params}){
return (
  <div className=" flex justify-center text-2xl font-bold mt-4">
    <h1>
      INI JADWAL UNTUK IBADAH <span className="uppercase">{params.id}</span>
    </h1>
  </div>
);
}