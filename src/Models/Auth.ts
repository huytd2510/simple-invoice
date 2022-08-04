export default class Auth {
  accessToken: string
  refreshToken: string
  scope: string
  idToken: string
  tokenType: string
  expiresIn: string
  constructor(props: any) {
    this.accessToken = props.access_token
    this.refreshToken = props.refresh_token
    this.scope = props.scope
    this.idToken = props.id_token
    this.tokenType = props.token_type
    this.expiresIn = props.expires_in
  }
}
