export interface IContact {
    id: number;
    name: string;
    contactNumber: string;
    emailAddress: string;
}

export class Contact<IContact> {
    id: number = 0;
    name: string = "";
    contactNumber: string = "";
    emailAddress: string = "";
}

export const ContactMock: IContact[] = [
    { id: 0, name: "Mark Bandilla", contactNumber: "0905-777-8910", emailAddress: "fake_email@gmail.com" },
    { id: 1, name: "Jay Contreras", contactNumber: "0917-123-4567", emailAddress: "kamikazeegod@gmail.com" },
    { id: 2, name: "Jason Astete", contactNumber: "0920-600-2222", emailAddress: "jayson_the_manace@gmail.com" },
    { id: 3, name: "Mikki Hill", contactNumber: "0920-600-2222", emailAddress: "keyboardista@gmail.com" },
    { id: 4, name: "Jose Luis Linao", contactNumber: "0917-123-4456", emailAddress: "kamikazeeprince@gmail.com" },
    { id: 5, name: "Allan Burdeos", contactNumber: "0917-666-6666", emailAddress: "allan_burdeos@gmail.com" },
    { id: 6, name: "Mark Estacio", contactNumber: "0917-666-6666", emailAddress: "mark_estacio@gmail.com" },
    { id: 7, name: "Jianelli Lubiano", contactNumber: "0917-888-7777", emailAddress: "kamikazeeprincess@gmail.com" },
    { id: 8, name: "Led Zeppelin Tuyay", contactNumber: "0917-444-1234", emailAddress: "led_zt@gmail.com" },
    { id: 9, name: "Sep Rono", contactNumber: "0917-444-1234", emailAddress: "sep_of_typecast@gmail.com" },
];