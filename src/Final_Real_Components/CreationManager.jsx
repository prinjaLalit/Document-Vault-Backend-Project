import React, { useState } from 'react';
import { BriefcaseIcon, PlusIcon } from '@heroicons/react/24/solid';
import FileUploadCustomVault from './FileUploadCustomVault';

export default function VaultManager() {
  const [vaults, setVaults] = useState([]); // Store all vault names
  const [currentVault, setCurrentVault] = useState(""); // Which vault is active
  const [creatingNewVault, setCreatingNewVault] = useState(true); // Initially, you're creating vault

  const [customVaultName, setCustomVaultName] = useState("");
  const [vaultPurpose, setVaultPurpose] = useState("");
  const [fileUploaderInstances, setFileUploaderInstances] = useState([0]);

  const handleVaultCreation = (e) => {
    e.preventDefault();
    if (customVaultName.trim() === "") {
      alert("Vault name cannot be empty!");
      return;
    }
    setVaults([...vaults, customVaultName]);
    setCurrentVault(customVaultName);
    setCreatingNewVault(false);
    setFileUploaderInstances([0]); // Reset file uploaders
    setCustomVaultName("");
    setVaultPurpose("");
  };
  const addNewFileUploader = () => {
    setFileUploaderInstances((prev) => [...prev, prev.length]);
  };
  const startNewVaultCreation = () => {
    setCreatingNewVault(true);
    setCustomVaultName("");
    setVaultPurpose("");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-white to-blue-100">
      {/* Sidebar after first vault creation */}
      {!creatingNewVault && (
        <div className="hidden md:flex md:w-64 mt-10 bg-white shadow-xl flex-col justify-between p-4">
          <div>
            <h2 className="text-blue-700 text-xl font-bold mb-6">Your Vaults</h2>
            <div className="space-y-3">
              {vaults.map((vault, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg cursor-pointer text-center 
                  ${vault === currentVault ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-700 hover:bg-blue-200"}`}
                  onClick={() => setCurrentVault(vault)}
                >
                  {vault}
                </div>
              ))}
            </div>
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg flex items-center justify-center space-x-2 mt-6"
            onClick={startNewVaultCreation}
          >
            <PlusIcon className="h-5 w-5" />
            <span>Create Vault</span>
          </button>
        </div>
      )}

      {/* Main Area */}
      <div className="flex-1 flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 overflow-x-hidden">
        {creatingNewVault ? (
          <div className="bg-white shadow-2xl rounded-2xl p-10 flex flex-col items-center w-full max-w-lg">
            <BriefcaseIcon className="h-20 w-20 text-blue-600 mb-6" />
            <form onSubmit={handleVaultCreation} className="flex flex-col items-center space-y-6 w-full">
              <input
                type="text"
                placeholder="Vault Name"
                value={customVaultName}
                onChange={(e) => setCustomVaultName(e.target.value)}
                className="border border-blue-300 rounded-lg w-3/4 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required/>
              
              <input
                type="text"
                placeholder="Vault Purpose"
                value={vaultPurpose}
                onChange={(e) => setVaultPurpose(e.target.value)}
                className="border border-blue-300 rounded-lg w-3/4 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-lg px-8 py-3 hover:bg-blue-700 transition-colors duration-300"
              >
                Create  Vault
              </button>
            </form>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-blue-700 mb-8">{currentVault}</h1>
            <div className="flex flex-wrap gap-6 justify-center">
              {fileUploaderInstances.map((id) => (
                <FileUploadCustomVault key={id} vaultName={currentVault} />
              ))}
            </div>
            <button
              onClick={addNewFileUploader}
              className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
            >
              + Add File to {currentVault}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
