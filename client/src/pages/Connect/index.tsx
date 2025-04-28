import { useState } from "react";
import { connectOptions } from "../../constants";
import { connectPortfolio } from "../../utils/api/portfolio";
import { useAuth } from "../../context/AuthContext"; // для доступу до userId

type ConnectMethod = "api" | "csv" | "manual";

const Connect = () => {
  const { user } = useAuth();
  const [activeMethod, setActiveMethod] = useState<ConnectMethod | null>(null);

  const [apiKey, setApiKey] = useState("");
  const [apiSecret, setApiSecret] = useState("");

  const [assetName, setAssetName] = useState("");
  const [quantity, setQuantity] = useState<number>(0);
  const [purchasePrice, setPurchasePrice] = useState<number>(0);

  const [csvFile, setCsvFile] = useState<File | null>(null);

  const handleConnectAPI = async () => {
    if (!user) return alert("You must be logged in!");

    try {
      await connectPortfolio(user._id, {
        platform: "api",
        accountName: "API Connection",
        credentials: { apiKey, apiSecret },
      });
      alert("Connected via API successfully!");
      setActiveMethod(null);
      setApiKey("");
      setApiSecret("");
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleUploadCSV = async () => {
    if (!csvFile) return alert("Please select a CSV file");

    const formData = new FormData();
    formData.append("file", csvFile);

    try {
      await connectPortfolio(user._id, {
        platform: "csv",
        accountName: "CSV Import",
        credentials: { fileName: csvFile.name },
      });
      alert("CSV uploaded successfully!");
      setActiveMethod(null);
      setCsvFile(null);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleAddManualAsset = async () => {
    if (!assetName || !quantity || !purchasePrice)
      return alert("Fill all fields!");

    try {
      await connectPortfolio(user._id, {
        platform: "manual",
        accountName: assetName,
        credentials: { quantity, purchasePrice },
      });
      alert("Asset added manually!");
      setActiveMethod(null);
      setAssetName("");
      setQuantity(0);
      setPurchasePrice(0);
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="p-10 md:py-20 lg:py-30 xl:py-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {connectOptions.map((option) => (
          <div
            key={option.method}
            className="p-6 bg-gray-900 rounded-lg shadow-lg flex flex-col items-start"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent mb-4">
              {option.title}
            </h2>
            <p className="text-gray-400 mb-6">{option.description}</p>
            <button
              onClick={() => setActiveMethod(option.method)}
              className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
            >
              {option.actionText}
            </button>
          </div>
        ))}
      </div>

      {activeMethod === "api" && (
        <div className="mt-10 p-6 bg-gray-800 rounded-lg relative">
          <h3 className="text-2xl text-white mb-4">Connect via API</h3>
          <input
            type="text"
            placeholder="Enter API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full p-2 rounded mb-4"
          />
          <input
            type="text"
            placeholder="Enter API Secret"
            value={apiSecret}
            onChange={(e) => setApiSecret(e.target.value)}
            className="w-full p-2 rounded mb-4"
          />
          <button
            onClick={handleConnectAPI}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
          >
            Connect
          </button>
          <button
            className="top-2 absolute right-2 font-bold cursor-pointer"
            onClick={() => setActiveMethod(null)}
          >
            X
          </button>
        </div>
      )}

      {activeMethod === "csv" && (
        <div className="mt-10 p-6 bg-gray-800 rounded-lg relative">
          <h3 className="text-2xl text-white mb-4">Upload CSV File</h3>
          <input
            type="file"
            accept=".csv"
            className="w-full p-2 rounded mb-4 bg-gray-700"
            onChange={(e) => setCsvFile(e.target.files?.[0] || null)}
          />
          <button
            onClick={handleUploadCSV}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
          >
            Upload
          </button>
          <button
            className="top-2 absolute right-2 font-bold cursor-pointer"
            onClick={() => setActiveMethod(null)}
          >
            X
          </button>
        </div>
      )}

      {activeMethod === "manual" && (
        <div className="mt-10 p-6 bg-gray-800 rounded-lg relative">
          <h3 className="text-2xl text-white mb-4">Add Asset Manually</h3>
          <input
            type="text"
            placeholder="Asset Name"
            value={assetName}
            onChange={(e) => setAssetName(e.target.value)}
            className="w-full p-2 rounded mb-4"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-2 rounded mb-4"
          />
          <input
            type="number"
            placeholder="Purchase Price"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(Number(e.target.value))}
            className="w-full p-2 rounded mb-4"
          />
          <button
            onClick={handleAddManualAsset}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
          >
            Add Asset
          </button>
          <button
            className="top-2 absolute right-2 font-bold cursor-pointer"
            onClick={() => setActiveMethod(null)}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default Connect;
