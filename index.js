// Code your solution here:


function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) { return driver.revenue > revenue});
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const richDrivers = driversWithRevenueOver(drivers, revenue);
  const driverNames = richDrivers.map(function(driver) {
    return driver.name;
  });
  return driverNames;
}

function exactMatch(drivers, attVal) {
  return drivers.filter(function(driver) { return driver[attVal[0]] == attVal[1]});
}
