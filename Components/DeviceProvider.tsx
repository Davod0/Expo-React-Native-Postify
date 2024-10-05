import { useBatteryLevel } from "expo-battery";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface DeviceContextValue {
  batteryLevel: number;
}

export const DeviceContext = createContext<DeviceContextValue>(
  {} as DeviceContextValue
);

export default function DeviceProvider(props: PropsWithChildren) {
  const [batteryLevel, setBatteryLevel] = useState(0);

  const getBatteryLevel = async () => {
    const battry = await useBatteryLevel();
    setBatteryLevel(battry);
    console.log(battry);
  };

  return (
    <DeviceContext.Provider
      value={{
        batteryLevel,
      }}
    >
      {props.children}
    </DeviceContext.Provider>
  );
}

export const useDevice = () => useContext(DeviceContext);
