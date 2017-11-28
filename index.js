// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name)
{
  drivers.push(name);
}

function destructivelyPrependDriver(name)
{
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name)
{
  drivers.pop();
}

function destructivelyRemoveFirstDriver(name)
{
  drivers.shift();
}

function appendDriver(name)
{
  const newDrivers = drivers.slice(0)
  newDrivers.push(name)
  return newDrivers;
}

function prependDriver(name)
{
  const anotherDrivers = drivers.slice(0)
  anotherDrivers.unshift(name)
  return anotherDrivers;
}

