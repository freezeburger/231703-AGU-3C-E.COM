import {BehaviorSubject} from 'rxjs';

export interface RsReactiveDatasource<DataType> {

    data$: BehaviorSubject<DataType>;
}

