const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {

  let turn = Math.pow(2, disksNumber) - 1
  let time = turn / turnsSpeed * 3600
  let second = Math.floor(time)
  const obj = {
  turns: turn,
  seconds: second,}

return obj
}

module.exports = {
  calculateHanoi
};
