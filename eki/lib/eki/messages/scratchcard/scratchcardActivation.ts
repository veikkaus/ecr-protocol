import { EkiGenericMessage, GameType, RecId, ScratchcardEAN } from "../messageTypes"
import { STATIC_SCRATCHCARD_TICKET_ID } from "../ticketId"
import { STATIC_TRANS_TIME } from "../transTime"

export const scratchcardActivationMessages: EkiGenericMessage[] = [
  {
    name: 'scratchcard-euro-activation',
    description: 'Euro 1€ scratchcard pack activation',
    payloadObject: {
      recId: RecId.ScratchcardActivation,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 100_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Euro_1E
    }
  },
  {
    name: 'scratchcard-massi-activation',
    description: 'Massi 2€ scratchcard pack activation',
    payloadObject: {
      recId: RecId.ScratchcardActivation,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 100_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Massi_2E
    }
  },
  {
    name: 'scratchcard-jouluarpa-activation',
    description: 'Jouluarpa 2€ scratchcard pack activation',
    payloadObject: {
      recId: RecId.ScratchcardActivation,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 20_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Jouluarpa_2E
    }
  },
  {
    name: 'scratchcard-kesa-arpa-activation',
    description: 'Kesä-arpa 2€ scratchcard pack activation',
    payloadObject: {
      recId: RecId.ScratchcardActivation,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 50_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.KesaArpa_2E
    }
  },
  {
    name: 'scratchcard-luonto-activation',
    description: 'Luonto 3€ scratchcard pack activation',
    payloadObject: {
      recId: RecId.ScratchcardActivation,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 75_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Luonto_3E
    }
  },
  {
    name: 'scratchcard-assa-activation',
    description: 'Ässä 4€ scratchcard pack activation',
    payloadObject: {
      recId: RecId.ScratchcardActivation,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 200_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Assa_4E
    }
  },
  {
    name: 'scratchcard-casino-5e-activation',
    description: 'Casino 5€ scratchcard pack activation',
    payloadObject: {
      recId: RecId.ScratchcardActivation,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 250_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Casino_5E
    }
  },
  {
    name: 'scratchcard-jalokivi-activation',
    description: 'Jalokivi 5€ scratchcard pack activation',
    payloadObject: {
      recId: RecId.ScratchcardActivation,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 125_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Jalokivi_5E
    }
  },
  {
    name: 'scratchcard-flaxi-activation',
    description: 'Flaxi 5€ scratchcard pack activation',
    payloadObject: {
      recId: RecId.ScratchcardActivation,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 125_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Flaxi_5E
    }
  },
  {
    name: 'scratchcard-breikki-activation',
    description: 'Breikki 5€ scratchcard pack activation',
    payloadObject: {
      recId: RecId.ScratchcardActivation,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 125_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Breikki_5E
    }
  },
  {
    name: 'scratchcard-onnensanat-5e-activation',
    description: 'Onnensanat 5€ scratchcard pack activation',
    payloadObject: {
      recId: RecId.ScratchcardActivation,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 125_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Onnensanat_5E
    }
  },
  {
    name: 'scratchcard-onnensanat-10e-activation',
    description: 'Onnensanat 10€ scratchcard pack activation',
    payloadObject: {
      recId: RecId.ScratchcardActivation,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 100_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Onnensanat_10E
    }
  },
  {
    name: 'scratchcard-casino-10e-activation',
    description: 'Casino 10€ scratchcard pack activation',
    payloadObject: {
      recId: RecId.ScratchcardActivation,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 100_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Casino_10E
    }
  },
  {
    name: 'scratchcard-joulukalenteri-activation',
    description: 'Joulukalenteri 10€ scratchcard pack activation',
    payloadObject: {
      recId: RecId.ScratchcardActivation,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 100_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Joulukalenteri_10E
    }
  },
  {
    name: 'scratchcard-mega-activation',
    description: 'Mega 20€ scratchcard pack activation',
    payloadObject: {
      recId: RecId.ScratchcardActivation,
      gameType: GameType.Raaputusarpa,
      transTime: STATIC_TRANS_TIME,
      transAmount: 200_00,
      ticketId: STATIC_SCRATCHCARD_TICKET_ID,
      ean: ScratchcardEAN.Mega_20E
    }
  },
]
