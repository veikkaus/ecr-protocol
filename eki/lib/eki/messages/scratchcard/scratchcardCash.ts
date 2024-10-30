import { EkiGenericMessage, GameType, RecId, ScratchcardEAN } from "../messageTypes"
import { STATIC_SCRATCHCARD_TICKET_ID } from "../ticketId"
import { STATIC_TRANS_TIME } from "../transTime"

export const scratchcardCashMessages: EkiGenericMessage[] = [
  {
    name: 'scratchcard-euro-cash',
    description: 'Euro scratchcard cash',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -5_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Euro_1E
    }
  },
  {
    name: 'scratchcard-massi-cash',
    description: 'Massi scratchcard cash',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -30_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Massi_2E
    }
  },
  {
    name: 'scratchcard-jouluarpa-cash',
    description: 'Jouluarpa scratchcard cash',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -30_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Jouluarpa_2E
    }
  },
  {
    name: 'scratchcard-kesa-arpa-cash',
    description: 'Kesä-arpa scratchcard cash',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -30_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.KesaArpa_2E
    }
  },
  {
    name: 'scratchcard-luonto-cash',
    description: 'Luonto scratchcard cash',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -50_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Luonto_3E
    }
  },
  {
    name: 'scratchcard-assa-cash',
    description: 'Ässä scratchcard cash',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -200_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Assa_4E
    }
  },
  {
    name: 'scratchcard-casino-5e-cash',
    description: 'Casino scratchcard cash',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -50_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Casino_5E
    }
  },
  {
    name: 'scratchcard-jalokivi-cash',
    description: 'Jalokiv scratchcard cash',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -50_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Jalokivi_5E
    }
  },
  {
    name: 'scratchcard-flaxi-cash',
    description: 'Flaxi scratchcard cash',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -50_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Flaxi_5E
    }
  },
  {
    name: 'scratchcard-breikki-cash',
    description: 'Breikki scratchcard cash',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -50_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Breikki_5E
    }
  },
  {
    name: 'scratchcard-onnensanat-5e-cash',
    description: 'Onnensanat scratchcard cash',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -50_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Onnensanat_5E
    }
  },
  {
    name: 'scratchcard-onnensanat-10e-cash',
    description: 'Onnensanat scratchcard cash',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -50_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Onnensanat_10E
    }
  },
  {
    name: 'scratchcard-casino-10e-cash',
    description: 'Casino scratchcard cash',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -50_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Casino_10E
    }
  },
  {
    name: 'scratchcard-joulukalenteri-cash',
    description: 'Joulukalenteri scratchcard cash',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -50_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Joulukalenteri_10E
    }
  },
  {
    name: 'scratchcard-mega-cash',
    description: 'Mega scratchcard cash',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: -200_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Mega_20E
    }
  },
]
