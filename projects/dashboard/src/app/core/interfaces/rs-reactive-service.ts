import { RsReactiveDatasource } from "./rs-reactive-datasource";
import { RsReactiveDispatcher } from "./rs-reactive-dispatcher";

export interface RsReactiveService<Data, Actions> 
       extends RsReactiveDatasource<Data>, RsReactiveDispatcher<Actions>{
}
