import { useMemo } from 'react';

import { useTheme } from 'styled-components';

import { Icon } from 'presentation/components/Icon';
import { Table } from 'presentation/components/Table';

import ordersMock from 'shared/mocks/orders';
import { type ITableColumn } from 'shared/types/General';

export function OrdersHistoryTable(): JSX.Element {
  const theme = useTheme();

  const data = ordersMock;

  const columns: ITableColumn[] = useMemo(
    () => [
      {
        label: 'Mesa',
        identifier: 'table'
      },
      {
        label: 'Data',
        identifier: 'date'
      },
      {
        label: 'Cliente',
        identifier: 'client'
      },
      {
        label: 'Total',
        identifier: 'total'
      }
    ],
    []
  );

  return (
    <Table>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.identifier}>{column.label}</th>
          ))}

          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            <td>{item.table}</td>
            <td>{item.table}</td>
            <td>{item.client_name}</td>
            <td>{item.table}</td>
            <td className='actions'>
              <button type='button'>
                <Icon
                  name='eye'
                  color={theme.colors.gray[500]}
                />
              </button>

              <button type='button'>
                <Icon
                  name='delete-bin'
                  color={theme.colors.primary[500]}
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
