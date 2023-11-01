const exampleTicketSerials = {
  toto: 'A-AAAA-BBBB-CCCC',
  toto2: 'A-AAAA-BBBB-CCCD',
  toto3: 'A-AAAA-BBBB-CCDD',
  toto4: 'A-AAAA-BBBB-CDDD',
  draw: '1234-111111111-083366',
  draw2: '1234-111111112-083366',
  draw3: '1234-111111122-083366',
  ebet: '1803-052320004-177366',
  multiScore: '1803-052320004-407366',
  score: '1803-052320004-237366',
  sport: '1803-052320004-247366',
  winner: '1803-052320004-187366'
}

const exampleCancelAndCashingTicketIds = {
  toto: '00000000000211000066',
  toto2: '00000000004932000066',
  draw: '01234111111111083366',
  draw2: '01234111111112083366',
  draw3: '01234111111122083366',
  ebet: '01803052320004177366',
  multiScore: '01803052320004407366',
  score: '01803052320004237366',
  sport: '01803052320004247366',
  winner: '01803052320004187366',
  instant: '1110000001001'
}

let ticketIdSeq = 1
const nextTicketId = () => `0${`${ticketIdSeq++}`.padStart(13, '0')}000066`

module.exports = {
  exampleTicketSerials,
  exampleCancelAndCashingTicketIds,
  nextTicketId
}