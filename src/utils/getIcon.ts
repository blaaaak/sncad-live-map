export function getIcon(pedId: number) {
  if (!IsPedInAnyVehicle(pedId, false)) return 6;
  const vehicle = GetVehiclePedIsIn(pedId, false);
  if (vehicle === 0) {
    return 6;
  }

  const vehicleModel = GetEntityModel(vehicle);
  if (isPoliceVehicle(vehicle)) return 56;
  if (isTowTruck(vehicleModel)) return 68;
  if (IsThisModelAHeli(vehicleModel)) return 64;
  if (IsThisModelABike(vehicleModel)) return 348;
  if (IsThisModelABoat(vehicleModel)) return 427;
  if (IsThisModelAJetski(vehicleModel)) return 427;
  if (IsThisModelAPlane(vehicleModel)) return 307;
  if (IsThisModelAnEmergencyBoat(vehicleModel)) return 755;
  if (IsThisModelAQuadbike(vehicle)) return 512;
  if (IsThisModelASubmersible(vehicleModel)) return 308;
  return 225;
}

function isPoliceVehicle(vehicle: number) {
  const vehicleClass = GetVehicleClass(vehicle);
  return vehicleClass === 18;
}

function isTowTruck(vehicleModel: number) {
  const hashes = [
    GetHashKey("towtruck"),
    GetHashKey("towtruck2"),
    // #MP2023_02 DLC (V 3095)
    GetHashKey("towtruck3"),
    GetHashKey("towtruck4"),
  ];
  return hashes.includes(vehicleModel);
}
