import React from "react";

import {InitialStateType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer"
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchPropsType = {
    onSendMessageClick: () => void
    onNewMessageChange: (body: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {

        onSendMessageClick: () => {
            dispatch(sendMessageAC())
        },
        onNewMessageChange: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))

        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)