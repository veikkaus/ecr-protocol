
export const PROTOCOL_VERSION = 'v03'

export type EkiGenericMessage = {
  name: string,
  description: string,
  payloadObject: GenericMessage
}

export type GenericMessage = {
  recId: RecId
  gameType: GameType
  transTime: string
  transAmount: number
  ticketId: string
  ean: string
}

export type EkiCustomerSessionEndMessage = {
  name: string,
  description: string,
  payloadObject: CustomerSessionEndMessage
}

export type CustomerSessionEndMessage = {
  transTime: string
  sellAmount: number
  cancelAmount: number
  cashAmount: number
  totalAmount: number
  numTrans: number
}

export enum RecId {
  Sell = '02',
  Cancel = '03',
  Cash = '04',
  ScratchcardActivation = '09',
  CustomerSessionEnd = '10'
}

export enum GameType {
  Lotto = '01',
  Vakio = '02',
  Jokeri = '04',
  Superkaksari = '05',
  Tulosveto = '06',
  Voittajaveto = '07',
  Moniveto = '11',
  PaivanPari = '13',
  Supertripla = '14',
  PaivanTrio = '15',
  Raaputusarpa = '16',
  Keno = '18',
  Eurojackpot = '22',
  Lomatonni = '27',
  Pitkaveto = '28',
  KaikkiTaiEiMitaan = '30',
  Synttarit = '31',
  Toto = '33',
  Vikinglotto = '34',
  Millilotto = '35'
}

export enum ScratchcardEAN {
  Euro_1E = '6417326002009',
  Massi_2E = '6417326002016',
  Jouluarpa_2E = '6417326002023',
  KesaArpa_2E = '6417326002030',
  Luonto_3E = '6417326002047',
  Assa_4E = '6417326002054',
  Casino_5E = '6417326002061',
  Jalokivi_5E = '6417326002078',
  Flaxi_5E = '6417326002085',
  Breikki_5E = '6417326002092',
  Onnensanat_5E = '6417326002108',
  Onnensanat_10E = '6417326002115',
  Casino_10E = '6417326002122',
  Joulukalenteri_10E = '6417326002139',
  Mega_20E = '6417326002146'
}