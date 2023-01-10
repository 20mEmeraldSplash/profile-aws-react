import React, { useMemo }  from "react";
import { useTable, usePagination } from 'react-table'
import "./PokemonTable.css";
import POKEMON_DATA from "../../../../../data/pokemon/pokedex.json";

function Pagination({
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    pageOptions,
    pageIndex
  }) {
    return (
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          上一页
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          下一页
        </button>
        <div>
          第{' '}
          <em>
            {pageIndex + 1} / {pageOptions.length}
          </em>{' '}
          页
        </div>
      </div>
    )
  }
  
function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows, 
        state: { pageIndex, pageSize },
        canPreviousPage,
        canNextPage,
        previousPage,
        nextPage,
        pageOptions,
        page,
        prepareRow
    } = useTable({
        columns,
        data,
        initialState: { pageSize: 10 },
    },
        usePagination,
    )
  
    return (
        <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination
    canPreviousPage={canPreviousPage}
    canNextPage={canNextPage}
    previousPage={previousPage}
    nextPage={nextPage}
    pageOptions={pageOptions}
    pageIndex={pageIndex}
  />
      </>
    )
}
export default function PokemonTable(){

    const columns = useMemo(
        () => [
            {
                id: 0,
                Header: '名前（カタカナ）',
                accessor: 'name.japanese'
            },
            {
                id: 1,
                Header: '名字（中文）',
                accessor: 'name.chinese'
            },
            {
                id:2,
                Header: 'Name (English)',
                accessor: 'name.english'
            },
            {
                id:3,
                Header: '',
                accessor: ''
            }
        ],
        []
    )
    const data = useMemo(() => POKEMON_DATA);
    return(
        <article>
            Pokemon Table
            <Table columns={columns} data={data}></Table>
        </article>
    )
}