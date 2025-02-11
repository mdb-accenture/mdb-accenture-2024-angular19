export interface IContact {
    id: number | string;
    name: string;
    contactNumber: string;
    emailAddress: string;
}

export interface IContactAction {
    contact?: IContact;
    action: string;
}

export class Contact<IContact> {
    id: number = 0;
    name: string = "";
    contactNumber: string = "";
    emailAddress: string = "";
}

export enum ContactError {
  Add = "Failed to Add Contact! Please contact admin.",
  Update = "Failed to Edit Contact! Please contact admin.",
  Delete = "Failed to Delete Contact! Please contact admin."
}

export const ContactMock: IContact[] = [
    { id: 1, name: "Mark Bandilla", contactNumber: "0905-777-8910", emailAddress: "fake_email@gmail.com" },
    { id: 2, name: "Jay Contreras", contactNumber: "0917-123-4567", emailAddress: "kamikazeegod@gmail.com" },
    { id: 3, name: "Jason Astete", contactNumber: "0920-600-2222", emailAddress: "jayson_the_manace@gmail.com" },
    { id: 4, name: "Mikki Hill", contactNumber: "0920-600-2222", emailAddress: "keyboardista@gmail.com" },
    { id: 5, name: "Jose Luis Linao", contactNumber: "0917-123-4456", emailAddress: "kamikazeeprince@gmail.com" },
    { id: 6, name: "Allan Burdeos", contactNumber: "0917-666-6666", emailAddress: "allan_burdeos@gmail.com" },
    { id: 7, name: "Mark Estacio", contactNumber: "0917-666-6666", emailAddress: "mark_estacio@gmail.com" },
    { id: 8, name: "Jianelli Lubiano", contactNumber: "0917-888-7777", emailAddress: "kamikazeeprincess@gmail.com" },
    { id: 9, name: "Led Zeppelin Tuyay", contactNumber: "0917-444-1234", emailAddress: "led_zt@gmail.com" },
    { id: 10, name: "Sep Rono", contactNumber: "0917-444-1234", emailAddress: "sep_of_typecast@gmail.com" },
];