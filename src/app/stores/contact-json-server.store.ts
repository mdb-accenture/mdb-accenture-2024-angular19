import { patchState, signalStore, withHooks, withMethods, withState } from "@ngrx/signals";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { pipe, switchMap, tap, catchError, of } from 'rxjs';
import { IContact } from "../models/contact"
import { ContactJsonServerService } from "../services/contact-json-server.service";
import { inject } from "@angular/core";
import { UiToastService } from "../services/ui-toast.service";
import { ToastActionTypes } from "../components/ui/ui-toast/ui-toast.component";

export type ContactJsonServerState = {
  contacts: IContact[],
  loading: boolean,
  error: string | null
}

export const ContactJsonServerStore = signalStore(
  { providedIn: "root" },
  withState<ContactJsonServerState>({
    contacts: [],
    loading: false,
    error: null
  }),
  withMethods((store, service = inject(ContactJsonServerService), toast = inject(UiToastService)) => ({
    loadAll: rxMethod<void>(pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(() => service.getAllContacts()),
        tap((contacts) => {
          patchState(store, { contacts, loading: false });
          toast.show('Contacts Data has been loaded!', ToastActionTypes.success);
        }),
        catchError((err: Error) => { 
          patchState(store, { error: err.message, loading: false }); 
          console.log('loadAll', err);
          toast.show('Failed to load all Contacts!', ToastActionTypes.fail);
          return of([]);
        })
    )),
    addContact: rxMethod(pipe(
      tap(() => patchState(store, { loading: true, error: null })),
      switchMap((contact) => service.addContact(contact as IContact)),
      tap((contact) => {
        patchState(store, { contacts: [...store.contacts(), contact] as IContact[], loading: false });
        toast.show('Successfully added a new contact!', ToastActionTypes.success);
      }),
      catchError((err: Error) => { 
        patchState(store, { error: err.message, loading: false }); 
        console.log('addContact', err);
        toast.show('Failed to add Contact!', ToastActionTypes.fail);
        return of(null);
      })
    )),
    updateContact: rxMethod(pipe(
      tap(() => patchState(store, { loading: true, error: null })),
      switchMap((contact) => service.updateContact(contact as IContact).pipe(
        tap((newContact: any) => {
          patchState(store, { contacts: store.contacts()
            .map(item => item.id === newContact.id ? { ...item, ...newContact } : item) as IContact[], loading: false });
          toast.show('Changes saved!', ToastActionTypes.success);
        }),
        catchError((err: Error) => { 
          patchState(store, { error: err.message, loading: false });
          console.log('updateContact', err);
          toast.show('Failed to update Contact!', ToastActionTypes.fail);
          return of(null);
        })
      ))
    )),
    deleteContact: rxMethod(pipe(
      tap(() => patchState(store, { loading: true, error: null })),
      switchMap((id) => service.deleteContact(id as string)),
      tap((contact: any) => {
        patchState(store, { contacts: [...store.contacts().filter(item => item.id != contact.id)], loading: false });
        toast.show('Contact deleted!', ToastActionTypes.success);
      }),
      catchError((err: Error) => { 
        patchState(store, { error: err.message, loading: false }); 
        console.log('deleteContact', err);
        toast.show('Failed to delete Contact!', ToastActionTypes.fail);
        return of(null);
      })
    )),
  })),
  withHooks({
    onInit(store) {
      store.loadAll();
    },
  })
)
