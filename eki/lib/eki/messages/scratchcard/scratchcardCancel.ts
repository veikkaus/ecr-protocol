import { EkiGenericMessage, GameType, RecId, ScratchcardEAN } from "../messageTypes"
import { STATIC_TICKET_ID } from "../ticketId"
import { STATIC_TRANS_TIME } from "../transTime"

export const scratchcardCancelMessages: EkiGenericMessage[] = [
  {
    name: 'scratchcard-euro-cancel',
    description: 'Euro 1€ scratchcard cancel',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -1_00,
      ticketId: STATIC_TICKET_ID,
      ean: ScratchcardEAN.Euro_1E
    }
  }, 
  {
    name: 'scratchcard-massi-cancel',
    description: 'Massi 2€ scratchcard cancel',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_00,
      ticketId: STATIC_TICKET_ID,
      ean: ScratchcardEAN.Massi_2E
    }
  }, 
  {
    name: 'scratchcard-jouluarpa-cancel',
    description: 'Jouluarpa 2€ scratchcard cancel',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_00,
      ticketId: STATIC_TICKET_ID,
      ean: ScratchcardEAN.Jouluarpa_2E
    }
  }, 
  {
    name: 'scratchcard-kesa-arpa-cancel',
    description: 'Kesä-arpa 2€ scratchcard cancel',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_00,
      ticketId: STATIC_TICKET_ID,
      ean: ScratchcardEAN.KesaArpa_2E
    }
  }, 
  {
    name: 'scratchcard-luonto-cancel',
    description: 'Luonto 3€ scratchcard cancel',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -3_00,
      ticketId: STATIC_TICKET_ID,
      ean: ScratchcardEAN.Luonto_3E
    }
  }, 
  {
    name: 'scratchcard-assa-cancel',
    description: 'Ässä 4€ scratchcard cancel',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -4_00,
      ticketId: STATIC_TICKET_ID,
      ean: ScratchcardEAN.Assa_4E
    }
  }, 
  {
    name: 'scratchcard-casino-5e-cancel',
    description: 'Casino 5€ scratchcard cancel',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -5_00,
      ticketId: STATIC_TICKET_ID,
      ean: ScratchcardEAN.Casino_5E
    }
  }, 
  {
    name: 'scratchcard-jalokivi-cancel',
    description: 'Jalokivi 5€ scratchcard cancel',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -5_00,
      ticketId: STATIC_TICKET_ID,
      ean: ScratchcardEAN.Jalokivi_5E
    }
  }, 
  {
    name: 'scratchcard-flaxi-cancel',
    description: 'Flaxi 5€ scratchcard cancel',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -5_00,
      ticketId: STATIC_TICKET_ID,
      ean: ScratchcardEAN.Flaxi_5E
    }
  }, 
  {
    name: 'scratchcard-breikki-cancel',
    description: 'Breikki 5€ scratchcard cancel',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -5_00,
      ticketId: STATIC_TICKET_ID,
      ean: ScratchcardEAN.Breikki_5E
    }
  }, 
  {
    name: 'scratchcard-onnensanat-5e-cancel',
    description: 'Onnensanat 5€ scratchcard cancel',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -5_00,
      ticketId: STATIC_TICKET_ID,
      ean: ScratchcardEAN.Onnensanat_5E
    }
  }, 
  {
    name: 'scratchcard-onnensanat-10e-cancel',
    description: 'Onnensanat 10€ scratchcard cancel',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ScratchcardEAN.Onnensanat_10E
    }
  }, 
  {
    name: 'scratchcard-casino-10e-cancel',
    description: 'Casino 10€ scratchcard cancel',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ScratchcardEAN.Casino_10E
    }
  }, 
  {
    name: 'scratchcard-joulukalenteri-cancel',
    description: 'Joulukalenteri 10€ scratchcard cancel',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ScratchcardEAN.Joulukalenteri_10E
    }
  }, 
  {
    name: 'scratchcard-mega-cancel',
    description: 'Mega 20€ scratchcard cancel',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -20_00,
      ticketId: STATIC_TICKET_ID,
      ean: ScratchcardEAN.Mega_20E
    }
  },
]
