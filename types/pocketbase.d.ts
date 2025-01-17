/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Authorigins = "_authOrigins",
	Externalauths = "_externalAuths",
	Mfas = "_mfas",
	Otps = "_otps",
	Superusers = "_superusers",
	Colors = "colors",
	NoteReactions = "note_reactions",
	Notes = "notes",
	Reactions = "reactions",
	ReactionsByNote = "reactions_by_note",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AuthoriginsRecord = {
	collectionRef: string
	created?: IsoDateString
	fingerprint: string
	id: string
	recordRef: string
	updated?: IsoDateString
}

export type ExternalauthsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	provider: string
	providerId: string
	recordRef: string
	updated?: IsoDateString
}

export type MfasRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	method: string
	recordRef: string
	updated?: IsoDateString
}

export type OtpsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	password: string
	recordRef: string
	sentTo?: string
	updated?: IsoDateString
}

export type SuperusersRecord = {
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	id: string
	password: string
	tokenKey: string
	updated?: IsoDateString
	verified?: boolean
}

export type ColorsRecord = {
	created?: IsoDateString
	hex?: string
	id: string
	name?: string
	updated?: IsoDateString
}

export type NoteReactionsRecord = {
	created?: IsoDateString
	id: string
	note?: RecordIdString
	reaction?: RecordIdString
	updated?: IsoDateString
	user?: RecordIdString
}

export type NotesRecord = {
	color: RecordIdString
	content: string
	created?: IsoDateString
	id: string
	updated?: IsoDateString
	user: RecordIdString
}

export type ReactionsRecord = {
	created?: IsoDateString
	iconify_id?: string
	id: string
	name?: string
	updated?: IsoDateString
}

export type ReactionsByNoteRecord<Treactions = unknown> = {
	id: string
	reactions?: null | Treactions
}

export type UsersRecord = {
	avatar?: string
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	id: string
	name?: string
	password: string
	tokenKey: string
	updated?: IsoDateString
	verified?: boolean
}

// Response types include system fields and match responses from the PocketBase API
export type AuthoriginsResponse<Texpand = unknown> = Required<AuthoriginsRecord> & BaseSystemFields<Texpand>
export type ExternalauthsResponse<Texpand = unknown> = Required<ExternalauthsRecord> & BaseSystemFields<Texpand>
export type MfasResponse<Texpand = unknown> = Required<MfasRecord> & BaseSystemFields<Texpand>
export type OtpsResponse<Texpand = unknown> = Required<OtpsRecord> & BaseSystemFields<Texpand>
export type SuperusersResponse<Texpand = unknown> = Required<SuperusersRecord> & AuthSystemFields<Texpand>
export type ColorsResponse<Texpand = unknown> = Required<ColorsRecord> & BaseSystemFields<Texpand>
export type NoteReactionsResponse<Texpand = unknown> = Required<NoteReactionsRecord> & BaseSystemFields<Texpand>
export type NotesResponse<Texpand = unknown> = Required<NotesRecord> & BaseSystemFields<Texpand>
export type ReactionsResponse<Texpand = unknown> = Required<ReactionsRecord> & BaseSystemFields<Texpand>
export type ReactionsByNoteResponse<Treactions = unknown, Texpand = unknown> = Required<ReactionsByNoteRecord<Treactions>> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	_authOrigins: AuthoriginsRecord
	_externalAuths: ExternalauthsRecord
	_mfas: MfasRecord
	_otps: OtpsRecord
	_superusers: SuperusersRecord
	colors: ColorsRecord
	note_reactions: NoteReactionsRecord
	notes: NotesRecord
	reactions: ReactionsRecord
	reactions_by_note: ReactionsByNoteRecord
	users: UsersRecord
}

export type CollectionResponses = {
	_authOrigins: AuthoriginsResponse
	_externalAuths: ExternalauthsResponse
	_mfas: MfasResponse
	_otps: OtpsResponse
	_superusers: SuperusersResponse
	colors: ColorsResponse
	note_reactions: NoteReactionsResponse
	notes: NotesResponse
	reactions: ReactionsResponse
	reactions_by_note: ReactionsByNoteResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: '_authOrigins'): RecordService<AuthoriginsResponse>
	collection(idOrName: '_externalAuths'): RecordService<ExternalauthsResponse>
	collection(idOrName: '_mfas'): RecordService<MfasResponse>
	collection(idOrName: '_otps'): RecordService<OtpsResponse>
	collection(idOrName: '_superusers'): RecordService<SuperusersResponse>
	collection(idOrName: 'colors'): RecordService<ColorsResponse>
	collection(idOrName: 'note_reactions'): RecordService<NoteReactionsResponse>
	collection(idOrName: 'notes'): RecordService<NotesResponse>
	collection(idOrName: 'reactions'): RecordService<ReactionsResponse>
	collection(idOrName: 'reactions_by_note'): RecordService<ReactionsByNoteResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
