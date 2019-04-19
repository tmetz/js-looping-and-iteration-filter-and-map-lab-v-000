// Code your solution here:


function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) { return driver.revenue > revenue});
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const richDrivers = drivers.filter(function(driver) { return driver.revenue > revenue});
  const driverNames = richDrivers.map(function(driver) {
    return driver.name;
  });
  return richDrivers;
}
