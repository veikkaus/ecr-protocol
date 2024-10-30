import { EkiGenericMessage, GameType, RecId, ScratchcardEAN } from "../messageTypes"
import { STATIC_SCRATCHCARD_TICKET_ID } from "../ticketId"
import { STATIC_TRANS_TIME } from "../transTime"

export const scratchcardSellMessages: EkiGenericMessage[] = [
  {
    name: 'scratchcard-euro-sell',
    description: 'Euro 1€ scratchcard sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 1_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Euro_1E
    }
  },
  {
    name: 'scratchcard-massi-sell',
    description: 'Massi 2€ scratchcard sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Massi_2E
    }
  },
  {
    name: 'scratchcard-jouluarpa-sell',
    description: 'Jouluarpa 2€ scratchcard sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Jouluarpa_2E
    }
  },
  {
    name: 'scratchcard-kesa-arpa-sell',
    description: 'Kesä-arpa 2€ scratchcard sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.KesaArpa_2E
    }
  },
  {
    name: 'scratchcard-luonto-sell',
    description: 'Luonto 3€ scratchcard sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 3_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Luonto_3E
    }
  },
  {
    name: 'scratchcard-assa-sell',
    description: 'Ässä 4€ scratchcard sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 4_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Assa_4E
    }
  },
  {
    name: 'scratchcard-casino-5e-sell',
    description: 'Casino 5€ scratchcard sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 5_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Casino_5E
    }
  },
  {
    name: 'scratchcard-jalokivi-sell',
    description: 'Jalokivi 5€ scratchcard sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 5_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Jalokivi_5E
    }
  },
  {
    name: 'scratchcard-flaxi-sell',
    description: 'Flaxi 5€ scratchcard sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 5_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Flaxi_5E
    }
  },
  {
    name: 'scratchcard-breikki-sell',
    description: 'Breikki 5€ scratchcard sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 5_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Breikki_5E
    }
  },
  {
    name: 'scratchcard-onnensanat-5e-sell',
    description: 'Onnensanat 5€ scratchcard sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 5_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Onnensanat_5E
    }
  },
  {
    name: 'scratchcard-onnensanat-10e-sell',
    description: 'Onnensanat 10€ scratchcard sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Onnensanat_10E
    }
  },
  {
    name: 'scratchcard-casino-10e-sell',
    description: 'Casino 10€ scratchcard sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Casino_10E
    }
  },
  {
    name: 'scratchcard-joulukalenteri-sell',
    description: 'Joulukalenteri 10€ scratchcard sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Joulukalenteri_10E
    }
  },
  {
    name: 'scratchcard-mega-sell',
    description: 'Mega 20€ scratchcard sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 20_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Mega_20E
    }
  },
]
