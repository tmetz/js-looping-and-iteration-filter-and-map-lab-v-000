// Code your solution here:


function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) { return driver.revenue > revenue});
}

function driverNamesWithRevenuOver(drivers, revenue) {
  const richDrivers = drivers.filter(function(driver) { return driver.revenue > revenue});
  return map(richDrivers, function(driver) {
    return driver.name;
  })
}
