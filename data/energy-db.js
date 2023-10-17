const energy = [
    {energy: 'Monster', done: true},
    {energy: 'Red Bull', done: true},
    {energy: 'Bang', done: false}
  ];

  module.exports = {
    getAll: function() {
      return energy;
    }
  };