import { Injectable } from '@angular/core';
import { TableComponent } from './table/table.component';
import { CardsComponent } from './cards/cards.component';
import { TableItem } from './table-item.interface';
@Injectable()
export class TableService {
    getTable(): TableItem {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return new TableItem(CardsComponent, [{ firstName: 'Udi', lastName: 'mazor' }, { firstName: 'Ella', lastName: 'Levi' }]);
        } else {
            return new TableItem(TableComponent, [{ firstName: 'Udi', lastName: 'mazor' }, { firstName: 'Ella', lastName: 'Levi' }]);
        }

    }
}
