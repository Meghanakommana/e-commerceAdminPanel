import SalesChart from './SalesChart';
import ProductTable from './ProductTable';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Overview</h2>
      <div className="bg-white p-6 rounded shadow">
        <SalesChart />
     </div>
        <ProductTable/>
      
    </div>
  );
}
