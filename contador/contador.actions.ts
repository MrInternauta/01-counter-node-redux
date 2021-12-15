import { Action } from "../ngrx-fake/ngrx"

export const incrementarAction: Action = {
    type: 'Incrementar'
}

export const decrementarAction: Action = {
    type: 'Decrementar'
}

export const MultiplicarAction: Action = {
    type: 'Multiplicar',
    payload: 10
}

export const DividirAction: Action = {
    type: 'Dividir',
    payload: 2
}

export const ResetAction: Action = {
    type: 'Reset'
}