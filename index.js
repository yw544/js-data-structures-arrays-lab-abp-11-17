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

let appendDriver(name) = drivers.push(name);
