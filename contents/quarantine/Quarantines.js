import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import SingleQuarantine from './SingleQuarantine';
import quarantineStore from '../../stores/quarantineStore';

const Quarantines = () => {
  const store = quarantineStore();
  const [currentPage, setCurrentPage] = useState(1);
  const quarantines = store.quarantines || [];
  const itemsPerPage = 7;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const itemsShown = quarantines.slice(firstIndex, lastIndex);
  const noPages = Math.ceil(quarantines.length / itemsPerPage);
  const numbers = [...Array(noPages).keys()].map((item) => item + 1);

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== noPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  return (
    <TableContainer className="tableSection">
      <Table>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>NAME</Th>
            <Th>CONDITION</Th>
            <Th>START DATE</Th>
            <Th>END DATE</Th>
            <Th>OUTCOME</Th>
            <Th>ACTIONS</Th>
          </Tr>
        </Thead>
        <Tbody>
          {itemsShown.map((item, index) => {
            const newIndex = firstIndex + index;
            return (
              <SingleQuarantine index={newIndex} item={item} key={item._id} />
            );
          })}
        </Tbody>
        <TableCaption>
          <div className="page">
            <div className="pageContainer">
              <div className="prev">
                <i onClick={prevPage}>Prev</i>
              </div>
              {numbers.map((item) => (
                <div
                  key={item}
                  className={`${currentPage === item ? 'activePage' : 'pages'}`}
                >
                  <i onClick={() => changePage(item)}>{item}</i>
                </div>
              ))}
              <div className="next">
                <i onClick={nextPage}>Next</i>
              </div>
            </div>
          </div>
        </TableCaption>
      </Table>
    </TableContainer>
  );
};

export default Quarantines;
