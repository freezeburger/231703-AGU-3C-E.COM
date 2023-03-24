export interface RsReactiveDispatcher<ActionType> {

    dispatch( action:{ type:ActionType, payload:any } ):void;
}
