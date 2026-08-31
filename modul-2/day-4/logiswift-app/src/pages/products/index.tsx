import LogiProductCard from "../../components/LogiProductCard";

const products = [
  {
    title: "LogiExpress",
    description: "Pengiriman cepat sampai dalam 24 jam",
  },
  {
    title: "LogiCargo",
    description: "Pengiriman muatan besar antar pulau via laut/udara",
  },
];

export default function Products() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">
        Layanan & Produk Kami
      </h1>

      {/* Menampilkan card products */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products?.map((item, index) => (
          <LogiProductCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
