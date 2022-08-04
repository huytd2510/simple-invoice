export interface VerifyMethod {
  customFieldId: string
  customKey: string
  customValue: string
}

export interface MemberShip {
  membershipId: string
  organisationId: string
  roleName: string
  token: string
}

export interface AppName {
  appName: string
}

export default class Profile {
  userId: string
  userName: string
  firstName: string
  lastName: string
  email: string
  status: string
  lastLoginAt: string
  contacts: [any]
  addresses: [any]
  listCustomFields: VerifyMethod[]
  employmentDetails: [any]
  memberships: MemberShip[]
  kycDetails: string
  apps: AppName[]
  listRoles: [string]
  permissions: [any]
  createdAt: string
  passwordExpired: boolean
  updatedAt: string

  constructor(props: any) {
    this.userId = props.userId
    this.userName = props.userName
    this.firstName = props.firstName
    this.lastName = props.lastName
    this.email = props.email
    this.status = props.status
    this.lastLoginAt = props.lastLoginAt
    this.contacts = props.contacts
    this.addresses = props.addresses
    this.listCustomFields = props.listCustomFields
    this.employmentDetails = props.employmentDetails
    this.memberships = props.memberships
    this.kycDetails = props.kycDetails
    this.apps = props.apps
    this.listRoles = props.listRoles
    this.permissions = props.permissions
    this.createdAt = props.createdAt
    this.passwordExpired = props.passwordExpired
    this.updatedAt = props.updatedAt
  }
}
