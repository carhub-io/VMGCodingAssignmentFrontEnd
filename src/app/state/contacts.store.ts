import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface ContactsState extends EntityState<Contact> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'contacts' })
export class ContactsStore extends EntityStore<ContactsState> {

  constructor() {
    super();
  }

}

