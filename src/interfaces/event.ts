export namespace Events {
  export type Type = {
    showSnackbar: Interface.ShowSnackbar
    disconnect: boolean
  }

  export namespace Interface {
    export interface ShowSnackbar {
      text: string
    }
  }
}
