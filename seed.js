const db = require('./server/database/db')
const { Entries, Keywords } = require('./server/database/models/')

const entries = [
  {
    content: 'i dreamt of bears'
  },
  {
    content: 'teeth falling out'
  },
  {
    content: 'falling'
  }
]

const keywords = [
  {
    word: 'bear',
    entryId: 1
  },
  {
    word: 'teeth',
    entryId: 2
  },
  {
    word: 'fall',
    entryId: 3
  }
]

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  await Entries.bulkCreate(entries)
  await Keywords.bulkCreate(keywords)

  console.log('success!')
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
