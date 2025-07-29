import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TariffContextType {
  selectedTariff: string;
  setSelectedTariff: (tariff: string) => void;
}

const TariffContext = createContext<TariffContextType | undefined>(undefined);

export const useTariff = () => {
  const context = useContext(TariffContext);
  if (context === undefined) {
    throw new Error('useTariff must be used within a TariffProvider');
  }
  return context;
};

interface TariffProviderProps {
  children: ReactNode;
}

export const TariffProvider: React.FC<TariffProviderProps> = ({ children }) => {
  const [selectedTariff, setSelectedTariff] = useState<string>('');

  return (
    <TariffContext.Provider value={{ selectedTariff, setSelectedTariff }}>
      {children}
    </TariffContext.Provider>
  );
}; 