import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { IContact } from "../models/contact"

export type ContactState = {
    contacts: IContact[]
}

export const ContactStore = signalStore(
    { providedIn: "root" },
    withState<ContactState>({
        contacts: [
            { id: 1, name: "Mark Bandilla", contactNumber: "0905-777-8910", emailAddress: "fake_email@gmail.com" },
            { id: 2, name: "Jay Contreras", contactNumber: "0917-123-4567", emailAddress: "kamikazeegod@gmail.com" },
            { id: 3, name: "Jason Astete", contactNumber: "0920-600-2222", emailAddress: "jayson_the_manace@gmail.com" }
        ]
    }),
    withMethods((store) => ({
        addContact: (contact: IContact) => {
            console.log({contact});
            patchState(store, {
                contacts: [...store.contacts(), contact]
            });
        },
        updateContact: (contact: IContact) => {
            patchState(store, {
                contacts: store.contacts()
                    .map(item => item.id === contact.id
                        ? { ...item, ...contact }
                        : item)
            });
        },
        deleteContact: (id: number) => {
            patchState(store, {
                contacts: store.contacts()
                    .filter(item => item.id !== id)
            })
        }
    }))
)