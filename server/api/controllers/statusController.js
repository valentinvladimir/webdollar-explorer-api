let request = require('request')
let blockchain = require('../blockchain/blockchain');

// if the current block is older than MAX_SYNC_OFFSET seconds,
// then the explorer is unsynced
let MAX_SYNC_OFFSET = 120 * 1000


exports.get_status = function(req, res) {
  let lastBlockInfo = blockchain.getSyncInfo(function (block) {
    if (!block) {
      res.json({})
      return
    }
    let is_synchronized = false
    let currentTimestamp = new Date().getTime()
    let blockTimestamp = new Date(block.timestamp).getTime()
    if (currentTimestamp - blockTimestamp < MAX_SYNC_OFFSET) {
      is_synchronized = true
    }
    let statusResult = {
      is_synchronized : is_synchronized,
      current_timestamp : currentTimestamp,
      block_timestamp : blockTimestamp,
      last_block : block.id
    }
    res.json(statusResult)
  });
}
