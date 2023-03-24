export interface RsReactiveDispatcher<ActionType> {

    dispacth( action:{ type:ActionType, payload:any } ):void;
}
