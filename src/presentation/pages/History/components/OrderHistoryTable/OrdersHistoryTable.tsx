import { useMemo } from 'react';

import { useTheme } from 'styled-components';

import { useListOrders } from 'data/features/orders/list-orders/useListOrders';

import { EmptyList } from 'presentation/components/EmptyList/EmptyList.component';
import { Icon } from 'presentation/components/Icon';
import { Loader } from 'presentation/components/Loader';
import { Table } from 'presentation/components/Table';
import { TableTitle } from 'presentation/components/TableTitle';

import { type ITableColumn } from 'shared/types/General';
import Currency from 'shared/utils/currency';
import Datetime from 'shared/utils/date';

import { ArchivedOrderModal } from '../ArchivedOrderModal/ArchivedOrderModal.component';

import { useOrdersHistoryTable } from './useOrdersHistoryTable';

export function OrdersHistoryTable(): JSX.Element {
  const theme = useTheme();

  const { archived, isLoading } = useListOrders();
  const {
    selectedOrder,
    handleExcludeOrderRegister,
    isOrderModalVisible,
    setIsOrderModalVisible
  } = useOrdersHistoryTable();

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

  if (isLoading) {
    return <Loader isLoading />;
  }

  return (
    <>
      {archived?.length === 0 ? (
        <EmptyList text='Você não possui nenhum pedido arquivado no momento' />
      ) : (
        <>
          <ArchivedOrderModal
            order={selectedOrder!}
            visible={isOrderModalVisible}
            onClose={() => {
              setIsOrderModalVisible(false);
            }}
          />

          <TableTitle
            title='Pedidos'
            quantity={archived?.length}
          />

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
              {archived?.map(item => (
                <tr key={item._id}>
                  <td>{item.table}</td>
                  <td>{Datetime.format(item.created_at)}</td>
                  <td>{item.client_name}</td>
                  <td>
                    {Currency.format(
                      item.products.reduce(
                        (total, { product, quantity }) =>
                          (total += product.price * quantity),
                        0
                      )
                    )}
                  </td>

                  <td className='actions'>
                    <button
                      type='button'
                      onClick={() => {
                        handleExcludeOrderRegister(item);
                      }}
                    >
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
        </>
      )}
    </>
  );
}
