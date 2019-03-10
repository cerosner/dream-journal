const Entries = require('./entry')
const Keywords = require('./keyword')

Entries.hasMany(Keywords)
Keywords.belongsTo(Entries)

module.exports = {
  Entries,
  Keywords
}
